import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

//Styles//
const CardContainer = styled.div`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    flex-direction: row;
  }
`;
const CardWrapper = styled.div`
  &:hover {
    cursor: pointer;
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    @-webkit-keyframes scale-up-center {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      100% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    @keyframes scale-up-center {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      100% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }
  display: grid;
  grid-template-columns: 20rem;
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
    margin-top: 0;
    font-size: 28px;
    font-weight: bold;
  }
  .cardText p {
    color: grey;
    font-size: 15px;
    font-weight: bold;
    margin-block-start: 1rem;
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
  .cardStats .stat {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    padding: 10px;
  }
  .cardStats .type {
    font-size: 11px;
    font-weight: 300;
    text-transform: uppercase;
  }
  .cardStats .value {
    font-size: 22px;
    font-weight: 500;
  }
  .cardStats .border {
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
  .cardStats .value sup {
    font-size: 12px;
  }
`;

function Recipes(props) {
  // console.log(props);
  const { userData } = props;
  const [recipe] = useState(userData.recipes);
  // console.log(recipe);

  return (
    <React.Fragment>
      {recipe &&
        recipe.map((reci, i) => {
          return (
            <section key={i}>
              <Link key={i} to={`/dashboard/recipe/${reci.id}`}></Link>
              <CardContainer>
                <CardWrapper className="card">
                  <img
                    className="cardImage"
                    src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"
                    alt=""
                  />
                  <div className="cardText">
                    <h2>{reci.title}</h2>
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
                    <div className="stat border">
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
          );
        })}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
    id: state.userData.id,
    firstName: state.userData.firstName,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(Recipes);
