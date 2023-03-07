import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import cookie from "cookie";
import Navigation from "./components/Navigation";
import Router from "./Router";


import "./App.css";



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(()=>{
    const cookies = cookie.parse(document.cookie)
    setLoggedIn(cookies.isLoggedIn === 'true' ? true : false)

  }, [loggedIn]) 

  return (
    <BrowserRouter>
      <Navigation loggedIn = {loggedIn} setLoggedIn ={setLoggedIn} />
      <Router loggedIn = {loggedIn} setLoggedIn ={setLoggedIn}/>
    </BrowserRouter>
  );
}

export default App;
