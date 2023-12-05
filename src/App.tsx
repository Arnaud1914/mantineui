import React, {useState} from 'react';
import '@mantine/core/styles.css';
import './App.css';
import { Login } from './Login/Login';
import {MantineProvider} from "@mantine/core";
import {LoggedIn} from "./LoggedIn";



function App() {
  return (
    <div className="App">
        <MantineProvider>
            {loggedIn ? <LoggedIn></LoggedIn> : <Login onLogin={handleLogin}></Login> }
        </MantineProvider>

    </div>
  );
}

export default App;
