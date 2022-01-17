const {
  GET_CONTENTS,
  ADD_CONTENT,
  UPDATE_CONTENT,
  GET_CONTENT,
} = require("../types/actionTypes");

export const getContents = (contents) => ({
  type: GET_CONTENTS,
  payload: contents,
});

export const getContentsById = (contents) => ({
  type: GET_CONTENT,
  payload: contents,
});

export const contentAdded = () => ({
  type: ADD_CONTENT,
});

export const contentUpdated = (content) => ({
  type: UPDATE_CONTENT,
  payload: content,
});
