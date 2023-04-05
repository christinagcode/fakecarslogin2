import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = (props) => {
  const {loggedIn, setLoggedIn} = props
  const navigate = useNavigate();


  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FakeCars.com
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
          {loggedIn ? (
              <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("isLoggedIn", null, {
                  maxAge: 0,
                });
                setLoggedIn(false)
                navigate("/login");
              }}
            >
              Logout
            </li>
          ) : (
            <li
            className="nav-list-item"
            onClick={() => {
              navigate("/login")
            }}
          >
            Login
          </li>
          )}

        
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
