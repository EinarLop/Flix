import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      HELLO
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/key">Key</Link>
      </nav>
    </div>
  );
}

export default App;
