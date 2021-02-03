import React, { useState, useEffect } from "react";

import axiosWithAuth from "./../utils/axiosWithAuth";

import RecipeCard from "./RecipeCard";

export default function Dashboard(props) {
  const [userInfo, setUserInfo] = useState({});
  let id = 10;

  useEffect(() => {
    axiosWithAuth()
      .get(`api/user/${id}`)
      .then((res) => {
        // console.log(res.data);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  console.log(userInfo);

  return (
    <React.Fragment>
      <h1>
        Welcome {userInfo.firstName} {userInfo.lastName}
      </h1>
      {/* user is able to see all the recipes 
      user can click on a recipe
      there user can edit/delete the specific recipe

      developer needs:
      ID for each for each recipe
      */}
      {/* isLoggedIn true display edit form */}
      <RecipeCard />
    </React.Fragment>
  );
}
