
import styled from 'styled-components'
import { colors } from "colors";
import DashboardGeneralInformation from 'components/UserDashboard/DashboardGeneralInformaton'
import HospitalsNearYou from 'components/UserDashboard/HospitalsNearYou'
import EventsNearYou from 'components/UserDashboard/EventsNearYou'
import DashboardContentWrapper from 'components/DashboardShared/DashboardContentWrapper';

const Container = styled.div`
  margin-bottom: 70px;
`


function HospitalDetails() {
    return (
        <DashboardContentWrapper>
            <Container>
                <DashboardGeneralInformation />
            </Container>
            <Container>
                <HospitalsNearYou />
            </Container>
            <Container>
                <EventsNearYou />
            </Container>
        </DashboardContentWrapper>
    );
}

export default HospitalDetails;
