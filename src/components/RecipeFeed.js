import React, { useState } from "react";
import styled from "styled-components";
import RecipePreview from "./RecipePreview";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleDoubleRight,
//   faAngleDoubleLeft,
// } from "@fortawesome/free-solid-svg-icons";

const RecipeFeedWrapper = styled.div`
  .slider {
    position: relative;
    padding: 0;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
  .slide {
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    display: flex;
    transition: 0.5s;
    flex-direction: row wrap;
    overflow: hidden;
    background: none;
  }
  /* .slider .slide section:nth-child(2) {
    display: none;
  } */
  .goLeft {
    font-size: 4rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 10%;
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
    width: 10%;
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
  #flexWrapper {
    flex-basis: 100%;
  }
`;

export default function RecipeFeed() {
  const [recipePreview, setRecipePreview] = useState();

  // useEffect(() => {
  //   axios
  //     .get("https://familyrecipe-app-backend.herokuapp.com/api/preview")
  //     .then((res) => {
  //       setRecipePreview(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  let slideArray = [<RecipePreview />];

  // const [x, setX] = useState(0);
  // const goLeft = () => {
  //   x === 0 ? setX(-100 * (slideArray.length - 1)) : setX(x + 100);
  // };
  // const goRight = () => {
  //   x === -100 * (slideArray.length - 1) ? setX(0) : setX(x - 100);
  // };

  return (
    <div className="RecipeFeedDiv">
      <RecipeFeedWrapper>
        <div className="slider">
          {slideArray.map((item, index) => {
            return (
              <div
                id="flexWrapper"
                key={index}
                className="slide"
                // style={{ transform: `translateX(${x}%)` }}
              >
                {item}
              </div>
            );
          })}

          {/* <button className="goLeft" onClick={goLeft}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
          <button className="goRight" onClick={goRight}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button> */}
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
