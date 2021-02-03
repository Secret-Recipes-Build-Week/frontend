import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  text-align: center;
  background-image: linear-gradient(to right, #49BF9D, white);
  /* * {
    border: 1px solid tomato;
  } */
  .navItems {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  a {
    margin: 0rem 1rem;
    padding: 0rem 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
    font-family: 'Permanent Marker', cursive;
    border: 2px solid black;
    border-radius: 10%;
    :hover {
      color: #ffffff;
      border: 2px solid white;
    }
  }

  .logo {
    width: 10%;
    text-align: center;
    margin-left: 5%;
    margin-top: 1%;
    margin-bottom: 1%;
    font-size: 1.6rem;
    font-family: 'Parisienne', cursive;
    color: white;
    border-radius: 10%;

    :hover {
      background-image: linear-gradient(to right, grey, transparent)
    }
  }

`;
export default StyledNav;
