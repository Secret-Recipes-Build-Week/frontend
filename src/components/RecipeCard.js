import React from "react";

export default function RecipeCard(props) {
  const { reci } = props;

  function randomNumber() {
    return Math.floor(Math.random() * 8);
  }

  const randomPick = (number) => {
    return [
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
      "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
      "https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=694&q=80",
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
      "https://images.unsplash.com/photo-1606851686066-c7f17f1ece96?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    ][number];
  };

  const src = randomPick(randomNumber());

  return (
    <div>
      <img className="cardImage" src={src} alt="" />
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
