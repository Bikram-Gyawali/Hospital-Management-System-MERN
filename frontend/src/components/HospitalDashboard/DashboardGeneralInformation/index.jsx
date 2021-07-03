import styled from 'styled-components'
import { colors } from "colors";
import Card from 'components/HospitalDashboard/CardLayout'
import EditButton from 'assets/images/edit.svg'
import { fonts } from 'fonts';



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

const index = () => {
    return (
        <Card>
            <CardHeader>
                <Title>
                    Account
                </Title>
                <Icons>
                    <IconButton onClick={(e) => console.log("Click")}>
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
                            12xsd495
                        </CardBodyDescription>
                    </CardItem>
                    <CardItem>
                        <CardBodyTitle>
                            Name
                        </CardBodyTitle>
                        <CardBodyDescription>
                            Ayush Mainali
                        </CardBodyDescription>
                    </CardItem>
                    <CardItem>
                        <CardBodyTitle>
                            Email
                        </CardBodyTitle>
                        <CardBodyDescription>
                            test@test.com
                        </CardBodyDescription>
                    </CardItem>
                </CardBodyLeft>
                <CardBodyRight>
                    <CardItem>
                        <CardBodyTitle>
                            Description
                        </CardBodyTitle>
                        <CardBodyDescription>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa minima totam at ratione sint architecto eum dolor odio.
                        </CardBodyDescription>
                    </CardItem>
                    <CardItem>
                        <CardBodyTitle>
                            Services Provided
                        </CardBodyTitle>
                        <CardBodyDescription>
                            Ventilator, Covid Checkup, Spinal Surgery, Next Covid Virus, AIDS, Third Degree Cancer Treatment
                        </CardBodyDescription>
                    </CardItem>
                </CardBodyRight>
            </CardBody>
        </Card>
    )
}

export default index
