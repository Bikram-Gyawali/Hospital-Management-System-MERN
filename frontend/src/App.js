import Userdahboard from "screens/UserDashboardScreen";
import Dashboard from "screens/HospitaldashboardScreen/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "screens/UserScreen/RegisterScreen/UserRegister";
import RegisterScreen from "screens/UserScreen/UserLogin/UserLogin";
import HomeScreen from "screens/HomeScreen";
import AboutScreen from "screens/AboutScreen";
import ServiceScreen from "screens/ServiceScreen";
import DoctorsScreen from "screens/DoctorsScreen";
import CovidScreen from "screens/CovidScreen";
import HospitalLogin from "screens/HospitalScreen/HospitalLogin/HospialLogin";
import HospitalRegister from "screens/HospitalScreen/HospitalRegister/HospitalRegister";
import HospitalProfile from "screens/HospitalProfile/HospitalProfile";
import "App.css";
import styled from "styled-components";
import Appointments from "screens/HospitalAppoinment/Appointments";

const AppContainer = styled.div`
  max-width: 1800px;
  margin: auto;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Route path="/:id/userDashboard" component={Userdahboard} />
        <Route path="/:id/hospitalDashboard" component={Dashboard} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/services" component={ServiceScreen} />
        <Route exact path="/doctors" component={DoctorsScreen} />
        <Route exact path="/user_register" component={LoginScreen} />
        <Route exact path="/user_login" component={RegisterScreen} />
        <Route exact path="/hospital_login" component={HospitalLogin} />
        <Route exact path="/hospital_register" component={HospitalRegister} />
        <Route exact path="/:id/hospitalprofile" component={HospitalProfile} />
        <Route exact path="/covid19" component={CovidScreen} />
        <Route
          exact
          path="/:hospitalId/appointments"
          component={Appointments}
        />
      </Router>
    </AppContainer>
  );
}

export default App;
