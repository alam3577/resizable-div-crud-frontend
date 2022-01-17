import axios from "axios";
import API from "./API";
import {
  contentAdded,
  contentUpdated,
  getContents,
  getContentsById,
} from "./contentActions";

export const loadContents = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${API}/content`);
    console.log({ data });
    dispatch(getContents(data));
  };
};

export const loadContentsById = (contentId) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${API}/content/${contentId}`);
    dispatch(getContentsById(data));
  };
};

export const addContent = (content) => {
  return async (dispatch) => {
    await axios.post(`${API}/content/add`, content);
    dispatch(contentAdded());
  };
};

export const updateContent = (content) => {
  return async (dispatch) => {
    await axios.put(`${API}/content/update`, content);
    dispatch(contentUpdated());
  };
};
