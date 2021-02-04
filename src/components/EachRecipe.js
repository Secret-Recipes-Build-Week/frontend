import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import image from "../images/bg.jpg"

const RecipeWrapper = styled.div`
padding: 1.5rem;
margin: 1rem;
display: flex;
justify-content: space-between;
flex-direction: row;

`

const imgStyleObject={
  border: "2px dashed goldenrod",
  display: "border-box",
  width: "100%",
}

const headerStyleObject = {
  fontSize: "2.5rem",
  fontFamily: 'Shadows Into Light, cursive',
  fontWeight: 'bold',
  marginBottom: "0.5rem"
}

const cardLeftStyleObject = {
  fontSize: "1rem",
  padding: "1.5rem",
  maxWidth: "33%",
  overflow: "hidden"
}

const cardRightStyleObject = {
  padding: "1.5rem",
  width: "100%",
  borderLeft: "2px dashed skyblue"
}

const sectionStyleObject = {
  border: "2px dashed #49BF9D",
  display: "flex",
  width: "100%"
}

const labelStyleObject = {
  fontSize: "1.6rem",
  fontFamily: "Shadows Into Light, cursive",
  backgroundColor: "tan",
  display: "inline-block",
  opacity: "80%",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  fontWeight: "bold"
}

const subHeaderStyleObject = {
  fontFamily: "Parisienne, cursive"
}

const paragraphStyleObject = {
  fontFamily: "Caveat, cursive",
  fontSize: "1.4rem"
}

function EachRecipe(props) {
  const { id } = useParams();
  const newID = parseInt(id);
  const [recipe] = useState(props.userData.recipes);
  console.log(recipe);

  if (!recipe) {
    return <div>Loading recipe information...</div>;
  }

  let recip = recipe.filter((r) => {
    return r.id === newID;
  });

  console.log(recip);

  return (
    <div>
      <RecipeWrapper>
      {recip.map((r, i) => (
        <section style={sectionStyleObject}key={i}>

          <div className="cardLeft" style={cardLeftStyleObject}>
          <h1 style={headerStyleObject}> {r.title}</h1>
          <p style={subHeaderStyleObject}> courtesy of {r.source},</p>
          <p style={subHeaderStyleObject}> crafted with love by {r.createdBy}.</p>
          <br />
          <img src={image} alt="meal" style={imgStyleObject}></img>
          </div>

          <div className="cardRight" style={cardRightStyleObject}>
          <p style={labelStyleObject}>Categories</p>
          {r.categories.map((c, i) => (
            <p style={paragraphStyleObject}key={i}>{c.category}</p>
          ))}
          <br />
          <p style={labelStyleObject}>Ingredients</p>
          {r.ingredients.map((i) => (
            <p style={paragraphStyleObject}key={i.id}>{i.name}</p>
          ))}
          <br />
          <p style={labelStyleObject}>Instructions</p>
          {r.instructions.map((i) => (
            <p style={paragraphStyleObject}key={i.id}>{i.text}</p>
          ))}
          <br />
          <p style={labelStyleObject}>Keywords:</p>
          <br />
          {r.keywords ? r.keywords : "You did not set any keywords"}
          <br />
          <br />
          <p style={labelStyleObject}>This recipe is {r.private === 0 ? "Not Private" : "Private"}</p>
          <br />

          <button>Edit</button>
          <button>Delete</button>
          </div>
          
          
        </section>
      ))}
      </RecipeWrapper>
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(EachRecipe);
