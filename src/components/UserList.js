import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../store/action/usersAction";
import User from "./User";
import { Backdrop, CircularProgress, Grid } from "@mui/material";
import SearchField from "./SearchField";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((store) => store.users);
  useEffect(() => {
    if (!users.length) {
      dispatch(fetchAllUsers());
    }
  }, []);

  return (
    <>
      <SearchField />
      <Grid container spacing={4} sx={{ padding: "30px 50px" }}>
        {users.length &&
          React.Children.toArray(users.map((user) => <User user={user} />))}
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default UserList;
