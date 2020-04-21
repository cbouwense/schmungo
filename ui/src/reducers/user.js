export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { 
        ...state,
        user: action.user
      };
    case "LOGOUT":
      console.log("Got LOGOUT")
      return {
        ...state,
        user: undefined
      }
    default:
      return state;
  }
};