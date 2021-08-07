import { useState } from 'react';
import styled from 'styled-components'
import { colors } from "colors";
import Card from 'components/DashboardShared/CardLayout'
import AddButton from 'assets/images/add.svg'
// import EditButton from 'assets/images/edit.svg'
import { fonts } from 'fonts';
import VaccancyForm from '../VaccancyForm';

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

const Icons = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`




const VaccancyAmount = styled.div`
    font-size: 18px;
    opacity: 0.8;
`


const VaccancyContainer = styled.div`
    padding: 0 50px;
`


const Vaccancy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    font-size: 22px;
    opacity: 0.8;
`
const VaccancyLeft = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`
const VaccancyDescription = styled.div``

const VaccancyIntro = styled.div`
    display: flex;
    flex-direction: column;
`
const VaccancyPosition = styled.div`
    font-size: 24px;
    font-weight: ${fonts.medium};
`


const Index = () => {
    const [open, setOpen] = useState(false)
    return (
        <Card>
            <CardHeader>
                <Title>
                    Vaccency Information
                </Title>
                <Icons>
                    <IconButton onClick={(e) => setOpen(true)}>
                        <img src={AddButton} alt={"Add Button "} />
                    </IconButton>
                    {/* <IconButton onClick={(e) => console.log("Click")}>
                        <img src={EditButton} alt={"Edit Button "} />
                    </IconButton> */}
                </Icons>
            </CardHeader>
            <Line />
            <CardBody>
                <VaccancyContainer>

                    <Vaccancy>
                        <VaccancyLeft>
                            <VaccancyIntro>
                                <VaccancyPosition>Frontend Developer</VaccancyPosition>
                                <VaccancyAmount><span>3</span> seats availiable</VaccancyAmount>
                            </VaccancyIntro>

                        </VaccancyLeft>
                        {/* <VaccancyRight>
                            <IconButton onClick={(e) => setEditVaccancyOpen(true)}>
                                <img src={EditButton} alt={"Edit Button "} />
                            </IconButton>
                        </VaccancyRight> */}
                    </Vaccancy>
                    <VaccancyDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pharetra, id pretium aliquet ac orci enim dolor. Scelerisque parturient at leo ornare a massa varius eget velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pharetra, id pretium aliquet ac orci enim dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pharetra, id pretium aliquet ac orci enim dolor. Scelerisque parturient at leo ornare a massa varius eget velit.
                    </VaccancyDescription>
                </VaccancyContainer>
                    <VaccancyForm open={open} setOpen={setOpen} />
            </CardBody>
        </Card>
    )
}

export default Index
