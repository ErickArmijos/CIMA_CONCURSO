import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin"; //chatbot

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//chatbot
// Kommunicate.init("120c7ec048a302e1c730dd7c5e725c4c8", {
//   automaticChatOpenOnNavigation: true,
//   popupWidget: true
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
