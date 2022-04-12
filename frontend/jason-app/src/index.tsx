import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Pages 
import Home from './pages/home';
import Landing from './pages/landing';

ReactDOM.render(
  <React.StrictMode>
     <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
      </BrowserRouter>
  </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
