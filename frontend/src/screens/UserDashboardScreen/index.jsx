import React, { useState, useEffect, useParams } from "react";
import Navbar from "components/DashboardShared/Navbar";
import SideBar from "components/DashboardShared/SideBar";
import styled from "styled-components";
import useGetUserData from "hooks/useGetUserSidebarData";
import axios from "axios";
// import UserAppointments from "components/UserAppointments/UserAppointments";
import DashboardGeneralInformation from "components/UserDashboard/DashboardGeneralInformaton";
import EventsNearYou from "components/UserDashboard/EventsNearYou";
import HospitalsNearYou from "components/UserDashboard/HospitalsNearYou";
import DashboardLayout from 'components/DashboardShared/DashboardLayout';

import { colors } from "colors";

const FlexContainer = styled.div`
  display: flex;
  padding: 0 20px 0 0px;
`;

const FlexRight = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
    background: ${colors.secondary}1A;
    padding: 50px 30px;
`
const Container = styled.div`
  margin-bottom: 70px;
`


const FlexLeft = styled.div`
  width: 300px;
`;
function Userdashboard() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;
  console.log(OneSignal);
  // fetch data
  const [hospitals, sethospitals] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hospitals/allHospital")
      .then((response) => {
        sethospitals([...response.data]);
        console.log(response);
      });
  }, []);

  const stringifyImage = (image) => {
    let string = "";
    for (let char in image[0]) {
      string += image[0][char];
    }
    return string;
  };

  const { userId, userMenuData } = useGetUserData();

  // let externalId = userId;

  OneSignal.push(function () {
    OneSignal.isPushNotificationsEnabled(function (isEnabled) {
      if (isEnabled) {
        console.log("Push notifications are enabled!");
        OneSignal.setExternalUserId(userId);
        console.log(OneSignal.getUserId());
      } else {
        console.log("Push notifications are not enabled yet.");
      }
    });
  });
  return (
    <DashboardLayout type={"hospital"} menuData={userMenuData}>
      <Wrapper>
        <Container>
          <DashboardGeneralInformation />
        </Container>
        <Container>
          <HospitalsNearYou />
        </Container>
        {/* <Container>
          <EventsNearYou />
        </Container> */}
      </Wrapper>
    </DashboardLayout>
    // =======
    // import useGetUserData from "hooks/useGetUserSidebarData";
    // import DashboardLayout from 'components/DashboardShared/DashboardLayout'
    // import UserDashboardRight from 'components/UserDashboard/UserDashboardRight'

    // function Index() {
    //   const { userMenuData } = useGetUserData()
    //   return (
    //     <DashboardLayout type={"user"}  menuData=  {userMenuData}>
    //           <UserDashboardRight />
    //     </DashboardLayout>
    // >>>>>>> origin/master
    //   );
    // }
  );
}
export default Userdashboard;
