import styled from "styled-components";

const StyledNav = styled.div`
  height: 5vh;
  background-color: #bbb;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  /* * {
    border: 1px solid tomato;
  } */
  a {
    text-align: center;
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
    :hover {
      color: blue;
    }
  }
  .navItems {
    width: 30%;
    display: flex;
    justify-content: space-around;
  }
  .logo {
    width: 10%;
    text-align: center;
    margin-left: 5%;
  }
`;
export default StyledNav;
