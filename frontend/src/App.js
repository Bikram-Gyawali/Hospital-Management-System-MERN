import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginScreen from './screens/RegisterScreen/RegisterScreen'
import RegisterScreen from './screens/LoginScreen/LoginScreen'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
    </Router>
  );
}

export default App;
