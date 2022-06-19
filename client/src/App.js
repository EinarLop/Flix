import { React, createContext, useState } from "react";

import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import Key from "./Pages/Movies";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const UsernameContext = createContext();

function App() {
  const [username, setUsername] = useState("Null");
  const handleUsername = (username) => {
    setUsername(username);
  };

  return (
    <div>
      <UsernameContext.Provider value={username}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/login"
              element={
                <Login
                  handleUsername={(loggedInUsername) =>
                    handleUsername(loggedInUsername)
                  }
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </UsernameContext.Provider>
    </div>
  );
}

export default App;
