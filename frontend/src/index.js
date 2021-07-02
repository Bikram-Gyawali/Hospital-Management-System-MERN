// <<<<<<< HEAD
import React from "react";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store'

import reportWebVitals from "./reportWebVitals";
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// =======


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
  </React.StrictMode>
// >>>>>>> origin/master
);
reportWebVitals();
