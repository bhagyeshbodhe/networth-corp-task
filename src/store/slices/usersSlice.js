import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  repositories: [],
  user: {},
  searchedUser: {},
  loading: false,
  userloading: false,
  error: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAll(state, { payload }) {
      state.users = [...state.users, ...payload];
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
    setUser(state, { payload }) {
      state.user = { ...payload };
    },
    setSearchedUser(state, { payload }) {
      state.searchedUser = { ...payload };
    },
    setRepositories(state, { payload }) {
      state.repositories = [...state.repositories, ...payload];
    },
    setUserLoading(state, { payload }) {
      state.userloading = payload;
    },
    setError(state, { payload }) {
      state.error = payload;
    },
  },
});

export const {
  setAll,
  setLoading,
  setUser,
  setRepositories,
  setUserLoading,
  setSearchedUser,
  setError,
} = usersSlice.actions;
export default usersSlice.reducer;
