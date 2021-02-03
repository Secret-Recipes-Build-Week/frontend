import React, { useEffect } from "react";
import { connect } from "react-redux";

// actions
import { setUserData } from "./../store/actions";
import Recipes from "./Recipes";

function Dashboard(props) {
  const { setUserData, firstName, id, error, isLoading } = props;
  console.log(id);

  useEffect(() => {
    setUserData(10);
  }, [setUserData, id]);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isLoading) {
    return <h2>Fetching quote for ya!</h2>;
  }

  return (
    <React.Fragment>
      <h1>Welcome {firstName}</h1>

      {/* user is able to see all the recipes 
      user can click on a recipe
      there user can edit/delete the specific recipe

      developer needs:
      ID for each for each recipe
      */}
      {/* isLoggedIn true display edit form */}
      <Recipes />
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

export default connect(mapStateToProps, { setUserData })(Dashboard);
