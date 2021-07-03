import Home from 'assets/images/dashboarsIcons/home.svg'
import Appointments from 'assets/images/dashboarsIcons/appointments.svg'
import Messages from 'assets/images/dashboarsIcons/messages.svg'
import Funds from 'assets/images/dashboarsIcons/funds.svg'
import Emergency from 'assets/images/dashboarsIcons/emergency.svg'
import BloodBank from 'assets/images/dashboarsIcons/blood-bank.svg'
// import { useSelector } from 'react-redux'



const useGetHospitalData = () => {
    // const hospitalId = useSelector(state => state.hospitalId)
    const hospitalId = 123;

    return ({
        hospitalId,
        hospitalMenuData: [
            {
                id: 1,
                route: `/${hospitalId}/hospitalDashboard/`,
                title: "Dashboard",
                icon: Home
            },
            {
                id: 2,
                route: `/${hospitalId}/hospitalDashboard/appointments/`,
                title: "Appointments",
                icon: Appointments
            },
            {
                id: 3,
                route: `/${hospitalId}/hospitalDashboard/messages/`,
                title: "Messages",
                icon: Messages
            },
            {
                id: 4,
                route: `/${hospitalId}/hospitalDashboard/funds/`,
                title: "Funds",
                icon: Funds
            },
            {
                id: 5,
                route: `/${hospitalId}/hospitalDashboard/emergency/`,
                title: "Emergency",
                icon: Emergency
            },
            {
                id: 6,
                route: `/${hospitalId}/hospitalDashboard/blood-bank/`,
                title: "Blood Bank",
                icon: BloodBank
            }

        ]
    }
        
    )
}



export default useGetHospitalData;