import React from "react";
import Navbar from "components/DashboardShared/Navbar";
import Sidebar from "components/DashboardShared/SideBar";
import Hosdetails from "../../components/HospitalDashboard/HospitalDashboardRight";
import styled from "styled-components";
import hospitalMenuData from 'sampleDatas/hospitalDashboardMenu';

const FlexContainer = styled.div`
  display: flex;
  padding: 0 20px 0 0px;

`

const FlexRight = styled.div`
 flex: 1;
`

const FlexLeft = styled.div`
  width: 300px;
`

function Dashboard() {
  return (
    <div>
      <Navbar type={ "hospital"}/>
      <FlexContainer>
        <FlexLeft>
          <Sidebar sidebarData = {hospitalMenuData} />
        </FlexLeft>
        <FlexRight>
          <Hosdetails />
        </FlexRight>
      </FlexContainer>

    </div>
  );
}

export default Dashboard;
