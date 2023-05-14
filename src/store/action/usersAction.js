import {
  setAll,
  setError,
  setLoading,
  setRepositories,
  setSearchedUser,
  setUser,
  setUserLoading,
} from "../slices/usersSlice";
import { get } from "./utils";

export const fetchAllUsers = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await get(`https://api.github.com/users`);
    dispatch(setAll(response.data));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchUserById = (login) => async (dispatch) => {
  dispatch(setUserLoading(true));
  try {
    const response = await get(`https://api.github.com/users/${login}`);
    const res = await get(`https://api.github.com/users/${login}/repos`);
    dispatch(setUser(response.data));
    dispatch(setRepositories(res.data));
  } finally {
    dispatch(setUserLoading(false));
  }
};
export const fetchUserBySearch = (userName) => async (dispatch) => {
  try {
    const response = await get(`https://api.github.com/users/${userName}`);
    const res = await get(`https://api.github.com/users/${userName}/repos`);
    dispatch(setSearchedUser(response.data));
    dispatch(setRepositories(res.data));
    dispatch(setError(false));
  } catch (err) {
    dispatch(setError(true));
  }
};
