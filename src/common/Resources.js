import { Box, Typography } from "@mui/material";
import React from "react";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import TimeSlot from "./TimeSlot";
import GroupsButton from "./GroupsButton";
import ResourceHeadline from "./ResourceHeadline";
import Assigne from "./Assigne";

const Resources = () => {
  return (
    <>
      <Box>
        <ResourceHeadline name="Resources" className="font-semibold text-sm" />
        <Typography
          variant="caption"
          className="font-semibold text-xs text-[var(--gray-light)] mt-1"
        >
          Compressed Arcive - 302 MB
        </Typography>
        <Box className="rounded-md relative bg-[var(--red)] p-3 h-[160px] mt-3 grid ">
          <AutoModeIcon className=" text-[var(--white)] w-5 h-5" />
          <span className="text-center text-[var(--white)] font-semibold relative bottom-4 text-xs">
            No preview for this file
          </span>
          <span className="text-right absolute bottom-4 font-semibold right-5 text-[var(--white)] text-xs">
            pdf
          </span>
        </Box>
        <Box className="mt-5">
          <ResourceHeadline
            name="Information"
            className="font-semibold text-sm mb-5"
          />
          <Box>
            <TimeSlot />
          </Box>
        </Box>

        <Box className="mt-5">
          <ResourceHeadline
            name="Groups"
            className="font-semibold text-sm mb-3"
          />
          <Box className="flex gap-3 ">
            <GroupsButton
              buttonName="Personal"
              iconColor="text-[var(--active-green)]"
              className="bg-[var(--active-green)] "
            />
            <GroupsButton
              buttonName="Viewer"
              iconColor="text-[var(--red)]"
              className="bg-[var(--red)] "
            />
          </Box>
          <Box className="mt-5">
            <ResourceHeadline
              name="Assignees"
              className="font-semibold text-sm mb-3"
            />
            <Assigne />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resources;
