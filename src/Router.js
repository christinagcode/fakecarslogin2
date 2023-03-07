import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => { 
    const cookies = cookie.parse(document.cookie)
    console.log(cookies.isLoggedIn)
    return cookies.isLoggedIn
}

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
const {component: Component, ...rest} = props
console.log(rest) 
    return checkAuth() ? <Component {...rest}/> : <p>Not Authenticated</p> 
}


{/* <ProtectedRoute component ={Home} /> */}

const Router = ({loggedIn, setLoggedIn}) => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Home}/>} />
            <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/about" element={<ProtectedRoute component={About} />} />
            <Route path="/car/:id" element={<ProtectedRoute component={Car} />} />
        </Routes>
    );
};

export default Router;