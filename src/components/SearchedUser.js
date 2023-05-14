import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchedUser = () => {
  const { searchedUser, error } = useSelector((store) => store.users);
  return (
    <>
      {error && (
        <>
          <Typography gutterBottom variant="h5" component="div" color="red">
            Enter valid username
          </Typography>
        </>
      )}
      {searchedUser.login && (
        <>
          <Grid item xs={12} sm={6} lg={4}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                sx={{ height: 250 }}
                image={searchedUser?.avatar_url}
                title={searchedUser?.login}
              />
              <CardContent>
                <Link
                  to={`/${searchedUser?.login}`}
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {searchedUser?.login?.toUpperCase()}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </>
  );
};

export default SearchedUser;
