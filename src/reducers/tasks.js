// Reducer(State,Stateを変更するメソッド)
// State
const initialState = {
  task: "",
  tasks: ["React", "Redux"]
};

// Stateを変更するメソッド
// taskを加える
export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload.task
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    case "REAET_TASK":
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
}
