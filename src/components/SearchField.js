import { Container, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserBySearch } from "../store/action/usersAction";
import SearchedUser from "./SearchedUser";

const SearchField = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchUserBySearch(search));
  };

  return (
    <Container sx={{ margin: "20px auto" }}>
      <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
        <InputBase
          onChange={(e) => setSearch(e.target.value.split(" ").join(""))}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search here"
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <SearchedUser />
    </Container>
  );
};

export default SearchField;
