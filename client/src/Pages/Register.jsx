import { useState, useContext } from "react";
import styles from "../Styles/LoginRegisterStyles.module.scss";
import { UsernameContext } from "../App";
import { Navigate } from "react-router-dom";
const axios = require("axios");

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    preference_key: -1,
  });

  const currentUsername = useContext(UsernameContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleOnChange = (event, property) => {
    setUser((user) => ({ ...user, [property]: event.target.value }));
  };

  const sendUser = () => {
    axios
      .post("http://localhost:3010/users/create", user)
      .then(function (response) {
        if (response.data === "New user added successfully") {
          setSuccessMsg("Account created");
          setErrorMsg("");
          setTimeout(() => setRedirect(true), 1500);
        } else if (response.data === "User already exists") {
          setErrorMsg("Username already taken");
          setSuccessMsg("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (redirect) return <Navigate to="/login" />;

  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>REGISTER</p>
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
        <button className={styles.SubmitButton} onClick={() => sendUser()}>
          Register
        </button>
      </div>
      <p className={styles.ErrorMsg}> {errorMsg} </p>
      <p className={styles.SuccessMsg}> {successMsg} </p>
    </div>
  );
};

export default Register;
