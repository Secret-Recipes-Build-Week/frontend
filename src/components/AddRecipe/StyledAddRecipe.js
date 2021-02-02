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
    padding: 2vh;
    margin: 2vh;
  }
  textarea{
    height: 15vh;
    width: 30vw;
  }
  textarea, input, select{
    outline: none;
    border: none;
    padding: 5px;
    margin: 5px;
    box-shadow: 1px 2px 10px;
    background-color: white;
    :visited{
      border: 1px solid blue;
    }
  }
  button{
    margin-top: 2vh;
    height: 3vh;
    :disabled{
      background-color: tomato;
    }
    background-color: lightgreen;
  }
  .textArealabel{
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
  }

`;
export default StyledAddRecipe;
