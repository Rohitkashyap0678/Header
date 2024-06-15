"use client";
import "react-pro-sidebar/dist/css/styles.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { Typography, Box, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AndroidIcon from "@mui/icons-material/Android";
import Avatar from "@mui/material/Avatar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "../styles/Prosidebar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "2px solid var(--border)",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="fixed h-[68px] w-full flex items-center border-b  justify-between bg-[var(--white)] text-[var(--black)] md:px-5 px-3  !z-[99999]">
        <div className="!flex items-center gap-1 md:gap-3">
          <IconButton onClick={toggleSidebar}>
            <MenuIcon className="text-[var(--black)]" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            className="text-[var(--navy-blue)] flex gap-1 !items-center text-2xl font-bold"
            component="div"
          >
            <AndroidIcon className="text-[var(--navy-blue)] text-3xl mr-1 font-bold" />
            Dlex
          </Typography>
        </div>
        <Box className=" items-center md:gap-2 flex">
          <IconButton
            size="large"
            aria-label="search"
            className="text-[var(--text-light)] flex md:hidden"
          >
            <SearchIcon />
          </IconButton>
          <Search className="md:flex hidden">
            <SearchIconWrapper>
              <SearchIcon className="text-[var(--text-light)]" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            className="text-[var(--text-light)]"
          >
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <Avatar
              className="w-9 h-9"
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36hbgSz_Zo3ErBi_q-rBG7m5JnrwIgGMrfw&s"
            />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default Header;
