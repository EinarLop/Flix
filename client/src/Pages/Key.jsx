import { useState } from "react";
const axios = require("axios");

const Key = () => {
  const [preferences, setPreferences] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const checked = (index) => {
    let temp = [...preferences];
    temp[index] = !temp[index];
    setPreferences(temp);
  };

  const validate = () => {
    // let temp = [...preferences];
    // let count = 0;
    // for (let i = 0; i < temp.length; i++) {
    // }
  };

  const generateKey = () => {
    console.log(preferences);
    let temp = [...preferences];
    let key = 1;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i]) {
        key = key * (i + 1);
      }
    }
    return (key % 5) + 1;
  };

  const getMovies = () => {
    let key = generateKey();
    axios
      .get("http://localhost:3010/movies/key/" + key)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <label>
        <span>Comedy</span>
        <input type="checkbox" onChange={() => checked(0)} />
      </label>
      <label>
        <span>Drama</span>
        <input type="checkbox" onChange={() => checked(1)} />
      </label>
      <label>
        <span>Sci-Fi</span>
        <input type="checkbox" onChange={() => checked(2)} />
      </label>
      <label>
        <span>Romantic</span>
        <input type="checkbox" onChange={() => checked(3)} />
      </label>
      <label>
        <span>Adventure</span>
        <input type="checkbox" onChange={() => checked(4)} />
      </label>
      <button onClick={() => console.log(getMovies())}>Send</button>
    </div>
  );
};

export default Key;
