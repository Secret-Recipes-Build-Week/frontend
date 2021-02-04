import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";
import styled from "styled-components";

//Styles//
const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: row;
`;
const CardWrapper = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  .cardImage {
    grid-area: "image";
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .cardText {
    grid-area: "text";
    margin: 25px;
  }
  .cardText h2 {
    margin-top: 0px;
    font-size: 28px;
    font-weight: bold;
  }
  .cardText h2:hover {
    cursor: pointer;

  }
  .cardText p {
    color: grey;
    font-size: 15px;
    font-weight: bold;
  }
  .cardStats {
    grid-area: "stats";
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: #4abf9d;
  }
  .cardStates .stat {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    padding: 10px;
  }
 
  .card {
    cursor: pointer;
    margin: 30px;
    border: 1px solid black;
    &:hover {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
  }
`;
export default function RecipeCard(props) {
  const { push } = useHistory();
  const [recipe, setRecipe] = useState();

  let id = 10;

  useEffect(() => {
    axiosWithAuth()
      .get(`api/user/${id}`)
      .then((res) => {
        // console.log(res.data);
        setRecipe(res.data.recipes);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  console.log("recipes", recipe);
  const displayRecipe = (id) => {
    // push(`/recipe/${}`);
    recipe.map((reci) => {
      return push(`/recipe/${id}`);
    });
  };

  return (
    <React.Fragment>
      {recipe &&
        recipe.map((reci) => (
          <section key={reci.id}>
            <CardContainer>
              <CardWrapper className="card">
                <img
                  className="cardImage"
                  src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"
                  alt=""
                />
                <div className="cardText">
                  <h2
                    onClick={() => {
                      displayRecipe(reci.id);
                    }}
                  >
                    {reci.title}
                  </h2>
                  <br />
                  <p>You will love this recipe! Try it out!</p>
                  <p>It's fast and easy, and taste amazing!</p>
                </div>
                <div className="cardStats">
                  <div className="stat">
                    <div className="value">
                      4<sup>m</sup>
                    </div>
                    <div className="type">Cooking time</div>
                  </div>
                  <div className="statBorder">
                    <div className="value">4,124</div>
                    <div className="type">Views</div>
                  </div>
                  <div className="stat">
                    <div className="value">32</div>
                    <div className="type">Comments</div>
                  </div>
                </div>
              </CardWrapper>
            </CardContainer>
          </section>
        ))}
    </React.Fragment>
  );
}
