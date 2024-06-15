import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, IconButton, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const TabView = () => {
  return (
    <>
      <Box className=" items-center justify-between flex pb-2   border-[--border] border-b">
        <Box className="gap-2 items-center flex">
          <IconButton className="rounded-full cursor-pointer commonShadowLight  text-[var(--gray-dark)] bg-[#f2f5fddf]">
            <KeyboardArrowLeftIcon className="w-5 h-5" />
          </IconButton>
          <Typography
            variant="body1"
            className="w-fit text-sm items-center font-semibold text-[var(--navy-blue)] flex"
          >
            resources&nbsp; /&nbsp;
          </Typography>
          <span className="text-sm  font-semibold text-[var(--gray-text)]">
            main files
          </span>
        </Box>
        <Box className="flex items-center gap-2">
          <IconButton className=" cursor-pointer  text-[var(--gray-dark)] ">
            <ErrorOutlineIcon className="w-5 h-5" />
          </IconButton>
          <IconButton className="rounded-none cursor-pointer  commonShadowLight  text-[var(--gray-dark)]  bg-[#F0F4FF] ">
            <AppsIcon className="w-5 h-5" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default TabView;
