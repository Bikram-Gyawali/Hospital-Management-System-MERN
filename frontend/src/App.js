import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginScreen from './screens/RegisterScreen/RegisterScreen'
import RegisterScreen from './screens/LoginScreen/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ServiceScreen from './screens/ServiceScreen'
import DoctorsScreen from './screens/DoctorsScreen'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ HomeScreen }/>
      <Route exact path="/about" component={ AboutScreen }/>
      <Route exact path="/services" component={ ServiceScreen }/>
      <Route exact path="/doctors" component={ DoctorsScreen }/>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
    </Router>
  );
}

export default App;
