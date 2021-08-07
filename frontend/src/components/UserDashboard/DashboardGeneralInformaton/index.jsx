import styled from 'styled-components'
import { colors } from "colors";
import Card from 'components/DashboardShared/CardLayout'
import EditProfileForm from 'components/UserDashboard/EditProfileForm'
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
    const userLogin = useSelector(state => state.userLogin)
    const userInfo = {
        name: "Rupak Thapa Magar",
        email: "aa@aa.com",
        _id: "12sdsdWX22",
        dob: "2056-04-19",
        contacts: "9811335594"
    }


    useEffect(() => {
        console.log(open)
    }, [open])

    const { _id, name, email, dob, contacts } = userLogin.userInfo;
    return (
        <Card>
            <CardHeader>
                <Title>
                    Account
                </Title>
                <Icons>
                    <IconButton onClick={() => setOpen(true)}>
                        <img src={EditButton} alt={"Edit Button "} />
                    </IconButton>
                </Icons>
            </CardHeader>
            <Line />
            <CardBody>
                <CardBodyLeft>
                    <CardItem>
                        <CardBodyTitle>
                            User ID
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
                            Date Of Birth
                        </CardBodyTitle>
                        <CardBodyDescription>
                            {dob}
                        </CardBodyDescription>
                    </CardItem>
                    <CardItem>
                        <CardBodyTitle>
                            Primary Number
                        </CardBodyTitle>
                        <CardBodyDescription>
                            {contacts}
                        </CardBodyDescription>
                    </CardItem>
                </CardBodyRight>
            </CardBody>

            <EditProfileForm open={open} setOpen={setOpen} />
        </Card>
    )
}

export default Index
