import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import Recipes from "./Recipes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faAngleDoubleRight, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

const RecipeFeedWrapper = styled.div`
  .slider {
    position: relative;
    margin: 0;
    display: flex;
    flex-flow: row;
    top: 0;
    height: 10%;
    box-sizing: border-box;
    align-items: center;
    justify-content: row;
    overflow: hidden;
    border: 1px solid red;
    margin: 0 auto;
    max-width: 20rem;
  }
  section {
      margin: 0 auto
  }
  .slide {
    position: relative;
    height: 100%;
    transition: 0.5s;
    background: none;
  }

  .goLeft {
    font-size: 4rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20%;
    background: none;
    height: 100%;
    border: none;
    outline: none;
    transition: 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }
  .goRight {
    right: 0;
    font-size: 4rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20%;
    height: 100%;
    margin-right: 0;
    background: none;
    border: none;
    outline: none;
    transition: 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }
`;

export default function RecipeFeed() {
  const [recipePreview, setRecipePreview] = useState();

  useEffect(() => {
    axios
      .get("https://familyrecipe-app-backend.herokuapp.com/api/preview")
      .then((res) => {
        setRecipePreview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  let slideArray = [<Recipes />,<Recipes/>,<Recipes/>,<Recipes/>,<Recipes/>,];

  const [x, setX] = useState(0);
  const goLeft = () => {
    setX(x + 100);
    x === 0 ? setX(-100 * (slideArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    setX(x - 100);
    x === -100 * (slideArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="RecipeFeedDiv">
      <RecipeFeedWrapper>
        <div className="slider">
          {slideArray.map((item, index) => {
            return (
                <div
                  key={index}
                  className="slide"
                  style={{ transform: `translateX(${x}%)` }}
                >
                  {item}
                </div>
            );
          })}
          <button className="goLeft" onClick={goLeft}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
          <button className="goRight" onClick={goRight}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
          
        </div>
        {
          // Add a function here to map over recipes in state, provided by endpoint.
          // Need to receive a feed of three random public posts from axios call and display upon render. @MAXWELL.
          // {feed.map((recipe) => {
          //return <RecipeCard recipe={recipe}  key={recipe.id} />
          //  })}
        }
      </RecipeFeedWrapper>
    </div>
    
  );
}
