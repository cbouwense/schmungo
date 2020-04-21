export default (state = {}, action) => {
  switch (action.type) {
    case "TASKS_UPDATING":
      return { 
        ...state,
        tasksUpdated: false
      };
    case "TASKS_UPDATED":
      return {
        ...state,
        tasksUpdated: true
      }
    default:
      return state;
  }
};