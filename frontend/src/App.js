import UserDashboard from "screens/UserDashboardScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import HospitalDashboard from "screens/HospitaldashboardScreen";
import LoginScreen from "screens/UserScreen/RegisterScreen";
import RegisterScreen from "screens/UserScreen/UserLogin";
import HomeScreen from "screens/HomeScreen";
import AboutScreen from "screens/AboutScreen";
import ServiceScreen from "screens/ServiceScreen";
import DoctorsScreen from "screens/DoctorsScreen";
import CovidScreen from "screens/CovidScreen";
import HospitalLogin from "screens/HospitalScreen/HospitalLogin";
import HospitalRegister from "screens/HospitalScreen/HospitalRegister";
import LoginOptions from "screens/LoginOptions";
import HospitalProfile from "screens/HospitalProfile";
import ProtectedRoute from "components/GlobalComponents/ProtectedRoutes";
import MedicineScreen from "screens/MedicineScreen/MedicineScreen";
import CartScreen from "screens/MedicineScreen/CartScreen";
import DoctorLogin from 'screens/DoctorScreen/DoctorLogin';
import DoctorRegister from 'screens/DoctorScreen/DoctorRegister';
import "App.css";

import { useSelector } from "react-redux";
import HospitalAppointment from "screens/HospitalAppointmentScreen";
import UserAppointment from "screens/UserAppointmentScreen";

const AppContainer = styled.div`
  max-width: 1800px;
  margin-right: auto;
`;

function App() {
  const userId = useSelector((state) => state.userLogin)?.userInfo?._id;
  const hospitalId = useSelector((state) => state.hospitalLogin)?.hospitalInfo
    ?._id;
  // const doctorId = useSelector((state) => state.doctorLogin)?.doctorInfo

  console.log(userId);
  return (
    <AppContainer>
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/services" component={ServiceScreen} />
        <Route exact path="/doctors" component={DoctorsScreen} />
        <Route exact path="/user_register" component={LoginScreen} />
        <Route exact path="/user_login" component={RegisterScreen} />
        <Route exact path="/hospital_login" component={HospitalLogin} />
        <Route exact path="/hospital_register" component={HospitalRegister} />
        <Route exact path="/doctor_login" component={DoctorLogin} />
        <Route exact path="/doctor_register" component={DoctorRegister} />
        <Route exact path="/login_options" component={LoginOptions} />
        <Route exact path="/covid19" component={CovidScreen} />
        <Route exact path="/doctorsahab/medicines" component={MedicineScreen} />
        <Route exact path="/cart/:id?" component={CartScreen} />
        <ProtectedRoute
          exact
          path="/:id/userDashboard/"
          component={UserDashboard}
          isAuth={userId ? true : false}
        />
        <ProtectedRoute
          exact
          path="/:id/userDashboard/appointments/"
          component={UserAppointment}
          isAuth={userId ? true : false}
        />
        <ProtectedRoute
          exact
          path="/:id/userDashboard/hospitals/"
          component={UserDashboard}
          isAuth={userId ? true : false}
        />
        <ProtectedRoute
          exact
          path="/:id/userDashboard/hospitals/:hospitalID"
          component={HospitalProfile}
          isAuth={userId ? true : false}
        />
        <ProtectedRoute
          exact
          path="/:id/hospitalDashboard/"
          component={HospitalDashboard}
          isAuth={hospitalId ? true : false}
        />
        <ProtectedRoute
          exact
          path="/:id/hospitalDashboard/appointments/"
          component={HospitalAppointment}
          isAuth={hospitalId ? true : false}
        />
        <ProtectedRoute
          exact
          path="/:id/hospitalDashboard/hospitals/"
          component={HospitalDashboard}
          isAuth={hospitalId ? true : false}
        />
        <ProtectedRoute
          exact
          path="/:id/hospitalDashboard/hospitals/:hospitalId/"
          component={HospitalProfile}
          isAuth={hospitalId ? true : false}
        />

      </Router>
    </AppContainer>
  );
}

export default App;
