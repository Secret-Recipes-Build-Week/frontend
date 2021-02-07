import styled from "styled-components";


const StyledNavMobile = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, #49BF9D, white);
  /* * {
    border: 1px solid tomato;
  } */
  .navItems {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 1rem 0rem;
  }

  a {
    margin: 0.5rem 0.5rem;
    padding: 0rem 0.5rem;
    text-decoration: none;
    display: flex;
    flex-grow: 1;
    color: black;
    font-size: 1.4rem;
    font-family: 'Permanent Marker', cursive;
    border: 4px solid black;
    border-radius: 10%;
    :hover {
      color: #ffffff;
      border: 2px solid white;
    }
  }

  .logo {
    display: none;
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
export default StyledNavMobile;
