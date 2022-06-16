import React from "react";
const loggedInUser = {
  username: null,
  updateUsername: (username) => {},
};

export const UsernameContext = React.createContext(loggedInUser);
