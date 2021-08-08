import styled from "styled-components";
import { colors } from "colors";
import Card from "components/DashboardShared/CardLayout";
import AddButton from "assets/images/add.svg";
import EditButton from "assets/images/edit.svg";
import { fonts } from "fonts";
import { useState, useEffect } from "react";
import AddEventsForm from "components/HospitalDashboard/AddEventsForm";
import { useSelector } from "react-redux";
import returnMonthString from "utils/returnMonth";

const Title = styled.div`
  font-size: 28px;
  font-weight: ${fonts.bold};
`;

const CardHeader = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardBody = styled.div``;

const IconButton = styled.button`
  border-radius: 999px;
  background: ${colors.secondaryWhite};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${colors.secondaryWhite};
  width: 50px;
  height: 50px;
  display: grid;
  place-content: center;
`;
const Line = styled.div`
  margin: 30px 0;
  height: 1px;
  width: 100%;
  background: ${colors.primaryYellow};
`;

const Icons = styled.div``;

const EventName = styled.div`
  font-size: 24px;
  font-weight: ${fonts.medium};
`;

const EventDate = styled.div`
  font-size: 18px;
  opacity: 0.8;
`;

const EventContainer = styled.div`
  padding: 0 50px;
`;

const EventHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  font-size: 22px;
  opacity: 0.8;
`;
const EventHeadLeft = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const EventHeadRight = styled.div``;
const EventBody = styled.div``;

const Index = () => {
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);
  const { hospitalInfo } = useSelector((state) => {
    return state.hospitalManipulation;
  });
// <<<<<<< ayush

// =======
//   const [hosInf, setHosInf] = useState([]);
//   useEffect(() => {
//     setHosInf(hospitalInfo.events);
//   }, [hosInf, hospitalInfo.events]);
// >>>>>>> master
  //   console.log(hospitalInfo);
  return (
    <Card>
      <CardHeader>
        <Title>Events</Title>
        <Icons>
          <IconButton onClick={(e) => setOpenAddForm(true)}>
            <img src={AddButton} alt={"Add Button "} />
          </IconButton>
        </Icons>
      </CardHeader>
      <Line />
      <CardBody>
        {hospitalInfo.events.map((event, index) => (
          <>
            <EventContainer key={event._id}>
              <EventHead>
                <EventHeadLeft>
                  <EventName>{event.eventName}</EventName>
                  <EventDate>
                    ({returnMonthString(new Date(event.date).getMonth())} -{" "}
                    {new Date(event.date).getDay()})
                  </EventDate>
                </EventHeadLeft>
                <EventHeadRight>
                  <IconButton onClick={(e) => setOpenEditForm(true)}>
                    <img src={EditButton} alt={"Edit Button "} />
                  </IconButton>
                </EventHeadRight>
              </EventHead>
              <EventBody>{event.desc}</EventBody>
            </EventContainer>
            {index < hospitalInfo.events.length - 1 && <Line />}
          </>
        ))}

        {/* <EventContainer>

                    <EventHead>
                        <EventHeadLeft>
                            <EventName>Event Number 2</EventName>
                            <EventDate>May 25</EventDate>
                        </EventHeadLeft>
                        <EventHeadRight>
                            <IconButton onClick={(e) => setOpenEditForm(true)}>
                                <img src={EditButton} alt={"Edit Button "} />
                            </IconButton>
                        </EventHeadRight>
                    </EventHead>
                    <EventBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pharetra, id pretium aliquet ac orci enim dolor. Scelerisque parturient at leo ornare a massa varius eget velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pharetra, id pretium aliquet ac orci enim dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pharetra, id pretium aliquet ac orci enim dolor. Scelerisque parturient at leo ornare a massa varius eget velit.
                    </EventBody>
                </EventContainer> */}
      </CardBody>
      <AddEventsForm open={openAddForm} setOpen={setOpenAddForm} type="add" />
    </Card>
  );
};

export default Index;
