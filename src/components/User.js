import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image={user?.avatar_url}
          title={user?.login}
        />
        <CardContent>
          <Link
            to={`/${user?.login}`}
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "#000",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {user?.login?.toUpperCase()}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default User;
