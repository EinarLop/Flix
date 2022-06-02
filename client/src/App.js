import React from "react";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import Key from "./Pages/Key";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/key" element={<Key />} />
        </Routes>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/key">Key</Link>
        </nav>
      </BrowserRouter>
      HELLO
    </div>
  );
}

export default App;
