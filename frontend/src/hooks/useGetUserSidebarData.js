import Home from 'assets/images/dashboarsIcons/home.svg'
import Appointments from 'assets/images/dashboarsIcons/appointments.svg'
import Messages from 'assets/images/dashboarsIcons/messages.svg'
import Funds from 'assets/images/dashboarsIcons/funds.svg'
import Emergency from 'assets/images/dashboarsIcons/emergency.svg'
import BloodBank from 'assets/images/dashboarsIcons/blood-bank.svg'
// import { useSelector } from 'react-redux'


const useGetUserData = () => {
    // const userId = useSelector(state => state.id)
    let userId = 123;
        
    return ({
        userId,
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
                route: `/${userId}/userDashboard/messages/`,
                title: "Messages",
                icon: Messages
            },
            {
                id: 4,
                route: `/${userId}/userDashboard/funds/`,
                title: "Funds",
                icon: Funds
            },
            {
                id: 5,
                route: `/${userId}/userDashboard/emergency/`,
                title: "Emergency",
                icon: Emergency
            },
            {
                id: 6,
                route: `/${userId}/userDashboard/blood-bank/`,
                title: "Blood Bank",
                icon: BloodBank
            }

        ]
    }
        
    )
}


export default useGetUserData;