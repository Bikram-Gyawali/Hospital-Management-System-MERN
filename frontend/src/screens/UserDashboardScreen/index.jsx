import useGetUserData from "hooks/useGetUserSidebarData";
import DashboardLayout from 'components/DashboardShared/DashboardLayout'
import UserDashboardRight from 'components/UserDashboard/UserDashboardRight'


function Index() {
  const { userMenuData } = useGetUserData()
  return (
    <DashboardLayout type={"user"}  menuData=  {userMenuData}>
          <UserDashboardRight />
    </DashboardLayout>
  );
}

export default Index
