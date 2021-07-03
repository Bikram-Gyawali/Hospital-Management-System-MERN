import React from "react";
import Navbar from "components/DashboardShared/Navbar";
import Sidebar from "components/DashboardShared/SideBar";
import Hosdetails from "../adddetails/Hosdetails";
import styled from "styled-components";


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
      <Navbar />
      <FlexContainer>
        <FlexLeft>
          <Sidebar />
        </FlexLeft>
        <FlexRight>
          <Hosdetails />
        </FlexRight>
      </FlexContainer>

    </div>
  );
}

export default Dashboard;
