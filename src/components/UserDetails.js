import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../store/action/usersAction";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Link,
  Typography,
} from "@mui/material";
import Repositories from "./Repositories";
const UserDetails = () => {
  const dispatch = useDispatch();
  const { login } = useParams();
  const { user, userloading } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUserById(login));
    window.scrollTo(0, 0);
  }, [login]);

  return (
    <Container maxWidth="sm">
      {!userloading ? (
        <>
          <Card sx={{ maxWidth: 400, margin: "20px 0" }}>
            <CardMedia
              sx={{ height: 300 }}
              image={user?.avatar_url}
              title={user?.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user?.name}
              </Typography>
              <Typography variant="h6" component="div">
                Company : {user?.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user?.bio}
              </Typography>
              <Typography
                variant="div"
                color="text.secondary"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>Followers : {user?.followers}</p>
                <p>Followings : {user?.following}</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Public Repositories : {user?.public_repos}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">
                <Link sx={{ textDecoration: "none" }} href={user?.html_url}>
                  GitHub Profile
                </Link>
              </Button>
              <Button size="small">
                <Link sx={{ textDecoration: "none" }} href={user?.blog}>
                  Blogs
                </Link>
              </Button>
            </CardActions>

            <Box>
              <Repositories />
            </Box>
          </Card>
        </>
      ) : (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={userloading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      )}
    </Container>
  );
};

export default UserDetails;
