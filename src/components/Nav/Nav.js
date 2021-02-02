import React, { useState, useEffect } from "react";
import StyledNav from "./StyledNav";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FOR DEVELOPEMENT ONLY>>>>>>>>>>>>>>>>>>>>>>>>>>
  const signoutHandler = () => {
    //Clicking the 'Sign out' button will delete token
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const signInFAKEHandler = () => {
    //Clicking the 'sign in' button will create token
    localStorage.setItem("token", "testToken");
    setIsLoggedIn(true);
  };
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>DELETE^^^>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const navItems = isLoggedIn ? (
    <div>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/add">Add Recipe</NavLink>
      <NavLink to="/" onClick={signoutHandler}>
        Sign out
      </NavLink>
    </div>
  ) : (
    <div>
      <NavLink to="/signin" onClick={signInFAKEHandler}>
        Sign in
      </NavLink>
      <NavLink to="/signup">Sign up</NavLink>
    </div>
  );

  return (
    <StyledNav>
      <div className="logo">logo?</div>
      <div className="navItems">{navItems}</div>
    </StyledNav>
  );
};

export default Nav;
