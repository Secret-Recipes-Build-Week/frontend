import React from 'react';
import StyledTestComponent from './StyledTestComponent';

const TestComponent = (props) => {
return(
  <StyledTestComponent>
    <h1>I'm an h1 coming from TestComponent.js
    </h1>
    <p>I'm a p tag</p>
  </StyledTestComponent>
)
};

export default TestComponent;