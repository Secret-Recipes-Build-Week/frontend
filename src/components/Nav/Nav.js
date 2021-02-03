import React, { useState, useEffect } from "react";
import StyledNav from "./StyledNav";
import { NavLink, useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { signOutUser } from "../../store/actions";

const Nav = (props) => {
  console.log(props);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { push } = useHistory();

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
    //dispatch an action to Redux
    props.signOutUser();
    setIsLoggedIn(false);
    push("/");
  };

  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FOR DEVELOPEMENT ONLY>>>>>>>>>>>>>>>>>>>>>>>>>>
  // const signInFAKEHandler = () => {
  //   //Clicking the 'sign in' button will create token
  //   setIsLoggedIn(true); //* use Redux instead to set isLoggedIn as true.
  // };
  // ! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>DELETE^^^>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const navItems = props.isLoggedIn ? (
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
      <div className="logo">logo?</div>
      <div className="navItems">{navItems}</div>
    </StyledNav>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { signOutUser })(Nav);
