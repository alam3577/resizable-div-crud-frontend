import { GET_CONTENT, GET_CONTENTS } from "../types/actionTypes";

const initialState = {
  contents: [],
  content: {},
  loading: true,
};

const contentReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_CONTENTS:
      return {
        ...state,
        loading: false,
        contents: actions.payload,
      };
    case GET_CONTENT:
      return {
        ...state,
        loading: false,
        content: actions.payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
