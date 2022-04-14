import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Pages
import Home from "./pages/home";
import Landing from "./pages/landing";
import Register from "./pages/registerRestaurant";
import Login from "./pages/login";
import Header from "./component/header";
import Footer from "./component/footer";

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
