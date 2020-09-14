import { Button } from "@material-ui/core";
import React, { MouseEvent } from "react";
import logo from "../../assets/img/logo.svg";
import { auth, provider } from "../../config/connectionFirebase";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../reducer";

import "./styles.css";

const Login = () => {
    const [state, dispatch] = useStateValue();

  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const signIn = () => {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          dispatch({
              type: actionTypes.SET_USER,
              user: result.user
          });
        })
        .catch((error) => {
          alert(error.message);
        });
    };

    signIn();
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="Slack" />
        <h1>Fazer Login</h1>
        <Button onClick={handleLogin}>Login com Google</Button>
      </div>
    </div>
  );
};

export default Login;
