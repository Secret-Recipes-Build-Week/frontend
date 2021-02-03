import React from 'react'
import styled from "styled-components";

const RecipeFeedWrapper = styled.div`
  border: 2px solid red;
  justify-content: center;
`



export default function RecipeFeed() {
    return (
        <div className="RecipeFeedDiv">
            <RecipeFeedWrapper>
                <h1>Recipe Feed</h1>
                {
                    // Add a function here to map over recipes in state, provided by endpoint.
                    // Need to receive a feed of three random public posts from axios call and display upon render. @MAXWELL.

                    // {feed.map((recipe) => {
                        //return <RecipeCard recipe={recipe}  key={recipe.id} />
                    //  })}
                    
                }
            </RecipeFeedWrapper>
        </div>
    )
}
