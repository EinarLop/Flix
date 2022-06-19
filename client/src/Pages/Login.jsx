import { useState, useContext } from "react";
import styles from "../Styles/LoginRegisterStyles.module.scss";
import { UsernameContext } from "../App";
import { Navigate } from "react-router-dom";
const axios = require("axios");

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    preference_key: -1,
  });

  const [redirect, setRedirect] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const currentUsername = useContext(UsernameContext);

  const handleOnChange = (event, property) => {
    setUser((user) => ({ ...user, [property]: event.target.value }));
  };

  const validateUser = () => {
    axios
      .post("http://localhost:3010/users/validate", user)
      .then(function (response) {
        if (response.data === "User exists") {
          setSuccessMsg("Login successful");
          setErrorMsg("");
          props.handleUsername(user.username);
          setTimeout(() => setRedirect(true), 1500);
        } else if (response.data === "User does not exists") {
          setErrorMsg("Incorrect username or password");
          setSuccessMsg("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (redirect) return <Navigate to="/movies" />;
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>LOGIN</p>
      <label className={styles.InputContainer}>
        <span> Username</span>
        <input
          type="text"
          placeholder="UserExample"
          onChange={(event) => handleOnChange(event, "username")}
        />
      </label>
      <label className={styles.InputContainer}>
        <span>Password</span>
        <input
          type="password"
          placeholder="PasswordExample"
          onChange={(event) => handleOnChange(event, "password")}
        />
      </label>
      <div className={styles.ButtonContainer}>
        <button className={styles.SubmitButton} onClick={() => validateUser()}>
          Login
        </button>
      </div>
      <p className={styles.ErrorMsg}> {errorMsg} </p>
      <p className={styles.SuccessMsg}> {successMsg} </p>
    </div>
  );
};

export default Login;
