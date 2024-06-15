import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const GroupsButton = ({ className, buttonName, iconColor }) => {
  return (
    <>
      <Button
        variant="contained"
        className={` rounded-3xl w-fit p-0 h-6 pr-1 pl-2 whitespace-nowrap capitalize text-xs text-[--white] flex items-center gap-2  ${className}`}
      >
        {buttonName}
        <CloseIcon className={` bg-white rounded-full w-4 h-4 ${iconColor}`} />
      </Button>
    </>
  );
};

export default GroupsButton;
