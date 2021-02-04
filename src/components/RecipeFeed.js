import React from 'react'
import styled from "styled-components";

const RecipeFeedWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0.6rem;
  padding: 0.6rem;
`



export default function RecipeFeed() {
    return (
        <div className="RecipeFeedDiv">
            <RecipeFeedWrapper>
                <p>Card Placeholder </p>
                <p>Card Placeholder </p>
                <p>Card Placeholder </p>
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
