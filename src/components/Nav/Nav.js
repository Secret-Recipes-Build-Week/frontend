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

  const signoutHandler = () => {
    //Clicking the 'Sign out' button will delete token
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FOR DEVELOPEMENT ONLY>>>>>>>>>>>>>>>>>>>>>>>>>>
  // const signInFAKEHandler = () => {
  //   //Clicking the 'sign in' button will create token
  //   setIsLoggedIn(true); //* use Redux instead to set isLoggedIn as true.
  // };
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
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign up</NavLink>
    </div>
  );

  return (
    <StyledNav>
      <div className="logo">logo</div>
      <div className="navItems">{navItems}</div>
    </StyledNav>
  );
};

export default Nav;
