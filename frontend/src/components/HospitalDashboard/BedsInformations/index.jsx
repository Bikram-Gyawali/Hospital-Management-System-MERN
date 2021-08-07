import { useState } from 'react';
import styled from 'styled-components'
import { colors } from "colors";
import Card from 'components/DashboardShared/CardLayout'
import AddButton from 'assets/images/add.svg'
// import EditButton from 'assets/images/edit.svg'
import { fonts } from 'fonts';
import BedForm from 'components/HospitalDashboard/BedForm'

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


const BedsContainer = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
`

const BedsCard = styled.div`
    padding: 20px 40px;
    background: ${colors.secondaryWhite};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const BedType = styled.div`
    font-size: 30px;
    font-weight: ${fonts.bold};
    margin-bottom: 35px;
`
const AvailiableBeds = styled.div`
    font-size: 30px;
    margin-bottom: 25px;
    opacity: 0.8;
`
const BedsInUse = styled.div`
    font-size: 30px;
    opacity: 0.8;
`

const Index = () => {
    const [open, setOpen] = useState(false)
    return (
        <Card>
            <CardHeader>
                <Title>
                    Beds Information
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
                <BedsContainer>
                    <BedsCard>
                        <BedType>ICU</BedType>
                        <AvailiableBeds><span>12</span> (Availiable)</AvailiableBeds>
                        <BedsInUse><span>35</span> (In Use)</BedsInUse>
                    </BedsCard>
                    <BedsCard>
                        <BedType>Ventilators</BedType>
                        <AvailiableBeds><span>12</span> (Availiable)</AvailiableBeds>
                        <BedsInUse><span>35</span> (In Use)</BedsInUse>
                    </BedsCard>
                    <BedsCard>
                        <BedType>Others</BedType>
                        <AvailiableBeds><span>18</span> (Availiable)</AvailiableBeds>
                        <BedsInUse><span>43</span> (In Use)</BedsInUse>
                    </BedsCard>
                    <BedForm open={open} setOpen={ setOpen }/>
                </BedsContainer>
            </CardBody>
        </Card>
    )
}

export default Index
