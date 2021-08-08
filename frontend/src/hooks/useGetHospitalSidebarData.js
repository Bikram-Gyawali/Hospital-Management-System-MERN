import Home from "assets/images/dashboarsIcons/home.svg";
import Appointments from "assets/images/dashboarsIcons/appointments.svg";
import Messages from "assets/images/dashboarsIcons/messages.svg";
import Funds from "assets/images/dashboarsIcons/funds.svg";
import Emergency from "assets/images/dashboarsIcons/emergency.svg";
import BloodBank from "assets/images/dashboarsIcons/blood-bank.svg";
import Hospital from "assets/images/dashboarsIcons/hospital.svg";
import Medics from 'assets/images/dashboarsIcons/medicines.svg'
import { useSelector } from "react-redux";

const useGetHospitalData = () => {
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });

  let responseObject = { ...hospitalLogin.hospitalInfo };
  let hospitalId = responseObject._id;

  return {
    hospitalMenuData: [
      {
        id: 1,
        route: `/${hospitalId}/hospitalDashboard/`,
        title: "Dashboard",
        icon: Home,
      },
      {
        id: 2,
        route: `/${hospitalId}/hospitalDashboard/appointments/`,
        title: "Appointments",
        icon: Appointments,
      },
      {
        id: 3,
        route: `/${hospitalId}/hospitalDashboard/hospitals/`,
        title: "Hospitals",
        icon: Hospital,
      },
      {
        id: 4,
        route: `/${hospitalId}/hospitalDashboard/messages/`,
        title: "Messages",
        icon: Messages,
      },
      {
        id: 5,
        route: `/${hospitalId}/hospitalDashboard/funds/`,
        title: "Funds",
        icon: Funds,
      },
      {
        id: 6,
        route: `/${hospitalId}/hospitalDashboard/emergency/`,
        title: "Emergency",
        icon: Emergency,
      },
      {
        id: 7,
        route: `/${hospitalId}/hospitalDashboard/blood-bank/`,
        title: "Blood Bank",
        icon: BloodBank,
      },
      {
        id: 8,
        route: `/doctorsahab/medicines/`,
        title: "Medicines",
        icon: Medics
      }
    ],
  };
};

export default useGetHospitalData;
