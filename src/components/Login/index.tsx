import { Button } from "@material-ui/core";
import React from "react";
import logo from "../../assets/img/logo.svg";

import "./styles.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="Slack" />
        <h1>Fazer Login</h1>
        <Button>Login com Google</Button>
      </div>
    </div>
  );
};

export default Login;
