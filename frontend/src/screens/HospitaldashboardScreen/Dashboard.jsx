import React from "react";
import Navbar from "components/DashboardShared/Navbar";
import Sidebar from "components/DashboardShared/SideBar";
import HospitalDetails from "../../components/HospitalDashboard/HospitalDashboardRight";
import styled from "styled-components";
import useGetHospitalData from 'hooks/useGetHospitalSidebarData';

const FlexContainer = styled.div`
  display: flex;

`

const FlexRight = styled.div`
 flex: 1;
`

const FlexLeft = styled.div`
  width: 300px;
`

function Dashboard() {

  const { hospitalId, hospitalMenuData } = useGetHospitalData()
  return (
    <div>
      <Navbar type={"hospital"} id={hospitalId} />
      <FlexContainer>
        <FlexLeft>
          <Sidebar sidebarData={hospitalMenuData} />
        </FlexLeft>
        <FlexRight>
          <HospitalDetails />
        </FlexRight>
      </FlexContainer>

    </div>
  );
}

export default Dashboard;
