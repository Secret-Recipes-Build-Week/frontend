import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser, setUserInfo } from "../store/actions";

import axiosWithAuth from "./../utils/axiosWithAuth";
import Recipes from "./Recipes";
// import AddRecipe from "./AddRecipe/AddRecipe";
// import PrivateRoute from './PrivateRoute';

const Dashboard = (props) => {
  const [userInfo, setUserInfoOG] = useState({});
  const { fetchUser, setUserInfo } = props;
  const { id } = props.userData;

  useEffect(() => {
    fetchUser();
    axiosWithAuth()
      .get(`api/user/${id}`)
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
        setUserInfoOG(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        //!add action for error handling
      });
  }, [id, fetchUser, setUserInfo]); //** removed props from here to avoid inf loop **/

  console.log(userInfo);

  return (
    <React.Fragment>
      <h1>Welcome</h1>
      {/* user is able to see all the recipes 
      user can click on a recipe
      there user can edit/delete the specific recipe
      
      developer needs:
      ID for each for each recipe
    */}
      {/* isLoggedIn true display edit form */}
      {/* <Route path='' component={}/> */}
      <Recipes recipess={userInfo.recipes} />
      {/* <PrivateRoute
        path="/dashboard/add"
        // component={AddRecipe}
        render={(props) => {
          return <AddRecipe {...props} asdf={"asdf"} />;
        }}
      /> */}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { fetchUser, setUserInfo })(Dashboard);
