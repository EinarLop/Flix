import { useEffect, useContext, useState } from "react";
import styles from "../Styles/MoviesStyles.module.scss";
import MovieCard from "../Components/MovieCard";
import { UsernameContext } from "../App";
import { Navigate } from "react-router-dom";
const axios = require("axios");

const Key = () => {
  const [preferences, setPreferences] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [movies, setMovies] = useState([]);
  const [order, setOrder] = useState(-1);
  const [errorMsg, setErrorMsg] = useState("");
  const currentUsername = useContext(UsernameContext);
  const [loggedInUser, setLoggedInUser] = useState({
    username: "pop",
    preference_key: -10,
  });
  const [redirect, setRedirect] = useState(false);

  const getPrevMovies = (key) => {
    axios
      .get("http://localhost:3010/movies/key/" + key + "/" + order)
      .then(function (response) {
        setMovies(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    if (currentUsername === "Null") {
      setRedirect(true);
      setErrorMsg("You need to login to access this page");
    }
    axios
      .get("http://localhost:3010/users/getByUsername/" + currentUsername)
      .then(function (response) {
        setLoggedInUser(response.data);
        getPrevMovies(response.data.preference_key);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const checked = (index) => {
    let temp = [...preferences];
    temp[index] = !temp[index];
    setPreferences(temp);
  };

  const handleOrder = () => {
    setOrder(order * -1);
  };

  const validate = () => {
    let temp = [...preferences];
    return temp.filter(Boolean).length === 3;
  };

  const generateKey = () => {
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
    if (validate()) {
      let key = generateKey();
      axios
        .get("http://localhost:3010/movies/key/" + key + "/" + order)
        .then(function (response) {
          // handle success

          setMovies(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      setErrorMsg("");

      axios
        .get(
          "http://localhost:3010/users/updateKey/" +
            loggedInUser.username +
            "/" +
            key
        )
        .then(function (response) {
          setLoggedInUser({ ...loggedInUser, preference_key: key });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      setErrorMsg("Choose exactly 3 option");
    }
  };

  if (redirect) return <Navigate to="/login" />;
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>MOVIES</p>

      {loggedInUser.preference_key === -1 ? (
        <p className={styles.CurrentKey}>
          Current key: You don't have a key yet
        </p>
      ) : (
        <p className={styles.CurrentKey}>
          Current key: {loggedInUser.preference_key}{" "}
        </p>
      )}

      <div className={styles.Form}>
        <label>
          <span className={styles.Label}>Comedy</span>
          <input type="checkbox" onChange={() => checked(0)} />
        </label>
        <label>
          <span className={styles.Label}>Drama</span>
          <input type="checkbox" onChange={() => checked(1)} />
        </label>
        <label>
          <span className={styles.Label}>Sci-Fi</span>
          <input type="checkbox" onChange={() => checked(2)} />
        </label>
        <label>
          <span className={styles.Label}>Romantic</span>
          <input type="checkbox" onChange={() => checked(3)} />
        </label>
        <label>
          <span className={styles.Label}>Adventure</span>
          <input type="checkbox" onChange={() => checked(4)} />
        </label>

        <div className={styles.SubmitContainer}>
          <label>
            <span className={styles.Label}>Ascending</span>
            <input type="checkbox" onChange={() => handleOrder()} />
          </label>
          <button className={styles.SubmitButton} onClick={() => getMovies()}>
            Send
          </button>
          <p className={styles.ErrorMsg}> {errorMsg}</p>
        </div>
      </div>

      <div className={styles.MovieContainer}>
        {movies.map((movie) => {
          return (
            <MovieCard
              title={movie.movie_title}
              year={movie.year}
              rating={movie.rating}
              place={movie.place}
              cast={movie.star_cast}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Key;
