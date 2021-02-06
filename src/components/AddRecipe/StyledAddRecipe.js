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

  .formTopSection {
    border: 2px dashed #49BF9D;
    display: flex;
    width: 100%;
  }


  .formTop {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .formTopHeader {
    font-size: 2rem;
    font-family: 'Permanent Marker', cursive;
    margin: 1rem 0rem;
  }

  .formTopHeaderTwo {
    font-size: 2rem;
    font-family: 'Permanent Marker', cursive;
    margin: 1rem auto 1rem 0;
  }

  .formField {
    border: 2px dashed goldenrod;
    margin-right: auto;
    margin-top: 1rem;
  }

  .textFields {
    width: 100%;
  }
  
  .textAreaStyle {
    margin-left: auto;

  }

  .formBottom {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    border: 2px dashed goldenrod;
    padding: 1rem;
  }

  #first {
    border-right: 2px dashed skyblue;
    margin: 0.5rem;
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
    padding: 0.5rem;
    margin: 1rem;
    font-family: 'Permanent Marker';
    border-radius: 25%;
    font-size: 2rem;
    border: 2px dashed #49BF9D;
    background-color: #49BF9D;
    color: black;
    margin-left: 1rem;
    :disabled{
      background-color: tomato;
      border: 2px solid white;
      color: white;
      :hover{
      background-color: white;
      color: tomato;
      border: 2px solid tomato;
    }
    }
    :hover{
      background-color: white;
      color: #49BF9D;
      border: 2px solid #49BF9D;
    }
  }
  .textArealabel{
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
  }

  .formPrivate{
    font-family: "Shadows Into Light", cursive;
  }
`;
export default StyledAddRecipe;
