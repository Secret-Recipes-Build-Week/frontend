import React from "react";
import StyledNav from "./StyledNav";
import { NavLink, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

//redux
import { connect } from "react-redux";
import { signOutUser } from "../../store/actions";

const Nav = (props) => {
  const { push } = useHistory();

  const signoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem('isLoggedIn')

    props.signOutUser();
    push("/");
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 500px)'
  })
  const isDesktop = useMediaQuery({
    query: '(min-width: 500px)'
  })

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
    <div>
      {isMobile && <h1>Dis a Mobile Page Beeitch.</h1>}
      {isDesktop && 
          <StyledNav>
          <div className="logo">Family Cookbook</div>
          <div className="navItems">{navItems}</div>
        </StyledNav>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { signOutUser })(Nav);
