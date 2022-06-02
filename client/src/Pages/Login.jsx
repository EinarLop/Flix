import { useState } from "react";
const axios = require("axios");

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    preference_key: -1,
  });

  const handleOnChange = (event, property) => {
    setUser((user) => ({ ...user, [property]: event.target.value }));
  };

  const validateUser = () => {
    console.log(user);
    axios
      .post("http://localhost:3010/users/validate", user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span> Username</span>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => handleOnChange(event, "username")}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span>Password</span>
        <input
          type="text"
          placeholder="password"
          onChange={(event) => handleOnChange(event, "password")}
        />
      </label>
      <button onClick={() => validateUser()}>Register</button>
    </div>
  );
};

export default Login;
