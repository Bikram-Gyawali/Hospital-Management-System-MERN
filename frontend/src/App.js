// <<<<<<< HEAD
// import LoginScreen from "./screens/RegisterScreen/RegisterScreen";
// import RegisterScreen from "./screens/LoginScreen/LoginScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Userdahboard from "./screens/userdashboard/Userdashboard";
import LoginScreen from './screens/UserScreen/RegisterScreen/UserRegister'
import RegisterScreen from './screens/UserScreen/UserLogin/UserLogin'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ServiceScreen from './screens/ServiceScreen'
import Dashboard from "./screens/hospitaldashboard/Dashboard";
import DoctorsScreen from './screens/DoctorsScreen'
import CovidScreen from './screens/CovidScreen'
import HospitalLogin from './screens/HospitalScreen/HospitalLogin/HospialLogin'
import HospitalRegister from './screens/HospitalScreen/HospitalRegister/HospitalRegister'
import './App.css';
import styled from 'styled-components'

const AppContainer = styled.div`
  max-width: 1600px;
  margin: auto;
`
// >>>>>>> origin/master

function App() {
  return (

    <Router>

<Switch>
      <Route exact path="/" component={ HomeScreen }/>
      <Route exact path="/about" component={ AboutScreen }/>
      <Route exact path="/services" component={ ServiceScreen }/>
      <Route exact path="/doctors" component={ DoctorsScreen }/>
      <Route exact path="/user_register" component={LoginScreen} />
      <Route exact path="/user_login" component={RegisterScreen} />
      <Route exact path="/hospital_login" component={HospitalLogin} />
      <Route exact path="/hospital_register" component={HospitalRegister} />
      <Route path="/userDashboard" component={Userdahboard} />
        <Route path="/hospitalDashboard" component={Dashboard} />
      <Route exact path="/covid19" component={CovidScreen} />
      </Switch>
>>>>>>> origin/master
    </Router>
  );
}

export default App;
