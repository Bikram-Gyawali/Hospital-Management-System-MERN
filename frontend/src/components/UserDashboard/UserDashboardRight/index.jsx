
import styled from 'styled-components'
import { colors } from "colors";
import DashboardGeneralInformation from 'components/UserDashboard/DashboardGeneralInformaton'
import HospitalsNearYou from 'components/UserDashboard/HospitalsNearYou'
import EventsNearYou from 'components/UserDashboard/EventsNearYou'


const Wrapper = styled.div`
    background: ${colors.secondary}1A;
    padding: 50px 30px;
`
const Container = styled.div`
  margin-bottom: 70px;
`


function HospitalDetails() {
    return (
        <Wrapper>
            <Container>
                <DashboardGeneralInformation />
            </Container>
            <Container>
                <HospitalsNearYou />
            </Container>
            <Container>
                <EventsNearYou />
            </Container>
        </Wrapper>
    );
}

export default HospitalDetails;
