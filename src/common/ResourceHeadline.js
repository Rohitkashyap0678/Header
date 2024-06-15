import { Typography } from "@mui/material";
import React from "react";

const ResourceHeadline = ({ name, className }) => {
  return (
    <>
      <Typography variant="h6" className={className}>
        {name}
      </Typography>
    </>
  );
};

export default ResourceHeadline;
