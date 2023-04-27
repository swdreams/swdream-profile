import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';


ReactGA.initialize('G-CX2R0D0CNV');
ReactGA.pageview(window.location.pathname + window.location.search);

console.log('GA4 added.. v2');


// GTM-M24KJPK
/* const tagManagerArgs = {
  gtmId: 'GTM-M24KJPK'
}
console.log(tagManagerArgs);
TagManager.initialize(tagManagerArgs); */


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
