import React from "react";
import styled from "styled-components";

export default function RecipeCard(props) {
    console.log(props);
    const {reci} = props;

  return (
    <div>
      <img
        className="cardImage"
        src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"
        alt=""
      />
      <div className="cardText">
        <h2>{reci.title}</h2>
        <br />
        <p>Description:</p>
        <p>{reci.keywords}</p>
        <p>Made by: {reci.source}</p>
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
    </div>
  );
}
