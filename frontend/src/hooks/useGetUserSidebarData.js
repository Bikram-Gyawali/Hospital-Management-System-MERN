import Home from 'assets/images/dashboarsIcons/home.svg'
import Appointments from 'assets/images/dashboarsIcons/appointments.svg'
import Messages from 'assets/images/dashboarsIcons/messages.svg'
import Funds from 'assets/images/dashboarsIcons/funds.svg'
import Emergency from 'assets/images/dashboarsIcons/emergency.svg'
import BloodBank from 'assets/images/dashboarsIcons/blood-bank.svg'
import Hospital from "assets/images/dashboarsIcons/hospital.svg";
import Medics from 'assets/images/dashboarsIcons/medicines.svg'
import { useSelector } from 'react-redux'


const useGetUserData = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, error } = userLogin
    let userId = userInfo._id
    return ({
        userMenuData: [
            {
                id: 1,
                route: `/${userId}/userDashboard/`,
                title: "Dashboard",
                icon: Home
            },
            {
                id: 2,
                route: `/${userId}/userDashboard/appointments/`,
                title: "Appointments",
                icon: Appointments
            },
            {
                id: 3,
                route: `/${userId}/userDashboard/hospitals/`,
                title: "Hospital",
                icon: Hospital
            },
            {
                id: 4,
                route: `/${userId}/userDashboard/messages/`,
                title: "Messages",
                icon: Messages
            },
            {
                id: 5,
                route: `/${userId}/userDashboard/funds/`,
                title: "Funds",
                icon: Funds
            },
            {
                id: 6,
                route: `/${userId}/userDashboard/emergency/`,
                title: "Emergency",
                icon: Emergency
            },
            {
                id: 7,
                route: `/${userId}/userDashboard/blood-bank/`,
                title: "Blood Bank",
                icon: BloodBank
            },
            {
                id: 8,
                route: `/doctorsahab/medicines/`,
                title: "Medicines",
                icon: Medics
            }

        ]
    }
        
    )
}


export default useGetUserData;