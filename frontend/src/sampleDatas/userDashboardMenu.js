import Home from 'assets/images/dashboarsIcons/home.svg'
import Appointments from 'assets/images/dashboarsIcons/appointments.svg'
import Messages from 'assets/images/dashboarsIcons/messages.svg'
import Funds from 'assets/images/dashboarsIcons/funds.svg'
import Emergency from 'assets/images/dashboarsIcons/emergency.svg'
import BloodBank from 'assets/images/dashboarsIcons/blood-bank.svg'
const data = [
    {
        id: 1,
        route: "/userDashboard",
        title: "Dashboard",
        icon: Home
    },
    {
        id: 2,
        route: "/userDashboard/appointments",
        title: "Appointments",
        icon: Appointments
    },
    {
        id: 3,
        route: "/userDashboard/messages",
        title: "Messages",
        icon: Messages
    },
    {
        id: 4,
        route: "/userDashboard/funds",
        title: "Funds",
        icon: Funds
    },
    {
        id: 5,
        route: "/userDashboard/emergency",
        title: "Emergency",
        icon: Emergency
    },
    {
        id: 6,
        route: "/userDashboard/blood-bank",
        title: "Blood Bank",
        icon: BloodBank
    },

]


export default data;