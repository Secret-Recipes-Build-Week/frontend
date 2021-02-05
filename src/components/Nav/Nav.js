import React from "react";
import StyledNav from "./StyledNav";
import { NavLink, useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { signOutUser } from "../../store/actions";

const Nav = (props) => {
  const { push } = useHistory();

  console.log(props);
  //! if (props.isLoggedIn === false) {
  //!   localStorage.removeItem("token");
  //! }

  const signoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem('isLoggedIn')

    props.signOutUser();
    push("/");
  };

      const navItems = props.isLoggedIn ? (
      <div>
        <NavLink exact to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/add">Add Recipe</NavLink>
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
      <div className="logo">Family Cookbook</div>
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
