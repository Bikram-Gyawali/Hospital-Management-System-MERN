import HospitalDetails from "components/HospitalDashboard/HospitalDashboardRight";
import useGetHospitalData from 'hooks/useGetHospitalSidebarData';
import DashboardLayout from 'components/DashboardShared/DashboardLayout'


function Dashboard() {

  const { hospitalMenuData } = useGetHospitalData()
  return (
    <DashboardLayout type={"hospital"} menuData = {hospitalMenuData}>
          <HospitalDetails />
    </DashboardLayout>
  );
}

export default Dashboard;
