import styled from "styled-components";
import Navbar from "components/DashboardShared/Navbar";
import Sidebar from "components/DashboardShared/SideBar";


const FlexContainer = styled.div`
  display: flex;

`

const FlexRight = styled.div`
 flex: 1;
`

const FlexLeft = styled.div`
  width: 300px;
`

const Index = ({type, id, menuData, children}) => {
    return (
        <div>
            <Navbar type={type} id={id} />
            <FlexContainer>
                <FlexLeft>
                    <Sidebar sidebarData={menuData} />
                </FlexLeft>
                <FlexRight>
                    {children}
                </FlexRight>
            </FlexContainer>

        </div>
    )
}

export default Index
