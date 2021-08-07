import styled from 'styled-components'
import { colors } from "colors";
import Card from 'components/DashboardShared/CardLayout'
import EditProfileForm from 'components/HospitalDashboard/EditProfileForm'
import EditButton from 'assets/images/edit.svg'
import { fonts } from 'fonts';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';



const Title = styled.div`
    font-size: 28px;
    font-weight: ${fonts.bold};
  `

const CardHeader = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CardBody = styled.div`
        padding: 0 50px;
        display: flex;
        gap: 230px;
`

const IconButton = styled.button`
    border-radius: 999px;
    background: ${colors.secondaryWhite};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid ${colors.secondaryWhite};
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;
  `
const Line = styled.div`
    margin: 30px 0;
    height: 1px;
    width: 100%;
    background: ${colors.primaryYellow};
  `

const Icons = styled.div``

const CardBodyTitle = styled.div`
    font-size: 24px;
    font-weight: ${fonts.medium};
    margin-bottom: 10px;
  `

const CardBodyDescription = styled.div`
    font-size: 20px;
    font-weight: ${fonts.light};
    opacity: 0.8;
  `

const CardItem = styled.div`
    margin-bottom: 25px;
  `

const CardBodyRight = styled.div``
const CardBodyLeft = styled.div``



const Index = () => {

    const [open, setOpen] = useState(false);

    const {hospitalInfo} = useSelector((state) => {
        return state.hospitalManipulation;
    });
    console.log(hospitalInfo)


    useEffect(() => {
        console.log(open)
    }, [open])
    
    const { _id, name, email, hospitalDescription } = hospitalInfo;
    return (
        <Card>
            <CardHeader>
                <Title>
                    Account
                </Title>
                <Icons>
                    <IconButton onClick={()=>setOpen(true)}>
                        <img src={EditButton} alt={"Edit Button "} />
                    </IconButton>
                </Icons>
            </CardHeader>
            <Line />
            <CardBody>
                <CardBodyLeft>
                    <CardItem>
                        <CardBodyTitle>
                            Hospital ID
                        </CardBodyTitle>
                        <CardBodyDescription>
                            {_id}
                        </CardBodyDescription>
                    </CardItem>
                    <CardItem>
                        <CardBodyTitle>
                            Name
                        </CardBodyTitle>
                        <CardBodyDescription>
                            {name}
                        </CardBodyDescription>
                    </CardItem>
                    <CardItem>
                        <CardBodyTitle>
                            Email
                        </CardBodyTitle>
                        <CardBodyDescription>
                            {email}
                        </CardBodyDescription>
                    </CardItem>
                </CardBodyLeft>
                <CardBodyRight>
                    <CardItem>
                        <CardBodyTitle>
                            Description
                        </CardBodyTitle>
                        <CardBodyDescription>
                            {hospitalDescription}
                        </CardBodyDescription>
                    </CardItem>
                    {/* <CardItem>
                        <CardBodyTitle>
                            Services Provided
                        </CardBodyTitle>
                        <CardBodyDescription>
                            Ventilator, Covid Checkup, Spinal Surgery, Next Covid Virus, AIDS, Third Degree Cancer Treatment
                        </CardBodyDescription>
                    </CardItem> */}
                </CardBodyRight>
            </CardBody>

            <EditProfileForm open={open} setOpen={ setOpen }/>
        </Card>
    )
}

export default Index
