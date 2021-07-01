import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/RegisterScreen/RegisterScreen";
import RegisterScreen from "./screens/LoginScreen/LoginScreen";
import Userdahboard from "./screens/userdashboard/Userdashboard";
import Dashboard from "./screens/hospitaldashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route path="/userDashboard" component={Userdahboard} />
        <Route path="/hospitalDashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
