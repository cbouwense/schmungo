export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("reducer action: ", action)
      console.log("returned state")
      console.log({
        ...state,
        user: action.user
      })
      return { 
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};