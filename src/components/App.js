import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";

import {UserProvider} from "../context/user";
import {ThemeProvider, ThemeContext} from "../context/theme";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className ={theme}>
      <UserProvider>
        <Header/>
        <Profile/>
      </UserProvider>
      <ThemeProvider>
        <DarkModeToggle/>
      </ThemeProvider>
    </main>
    
  );
}

export default App;
