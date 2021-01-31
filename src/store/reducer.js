import * as actionTypes from './actions';

const initState = {
  test: 'test'
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return state; //*placeholder
    default:
      return state;
  }
};

export default reducer;