import { combineReducers } from "redux";

const ADD = "ADD";

const initialState = {
  example_counter: 0,
};

export const sampleAction = {
  type: ADD,
};

export const sampleReduder = (state = initialState.example_counter, action) => {
  switch (action.type) {
    case ADD:
      return state++;
    default:
      return state;
  }
};

export default combineReducers({
  sample: sampleReduder,
});
