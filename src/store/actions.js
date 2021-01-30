//consts - named exports
export const ADD_USER = 'ADD_USER';

//action factories
export const addUser = (newUser) => {
  return {type: ADD_USER, payload: newUser}
}