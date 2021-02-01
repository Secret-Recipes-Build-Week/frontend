import styled from "styled-components";

const StyledAddRecipe = styled.div`
  * {
    /* border: 1px solid tomato; */
  }

  box-sizing: border-box;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  textarea{
    height: 20vh;
    width: 30vw;
  }
`;
export default StyledAddRecipe;
