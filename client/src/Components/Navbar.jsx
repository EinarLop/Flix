import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import styles from "../Styles/NavbarStyles.module.scss";
import { UsernameContext } from "../App";
const Navbar = () => {
  const currentUsername = useContext(UsernameContext);
  return (
    <nav>
      <Link className={styles.Link} to="/login">
        Login
      </Link>
      <Link className={styles.Link} to="/register">
        Register
      </Link>
      <Link className={styles.Link} to="/movies">
        Movies
      </Link>
      <p className={styles.CurrentUser}>Current user: {currentUsername} </p>
    </nav>
  );
};

export default Navbar;
