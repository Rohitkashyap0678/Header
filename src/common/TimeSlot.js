import React from "react";
import { Box, Typography } from "@mui/material";

const data = [
  { title: "Cheacked", date: "Sat 29, 2020 at 10: 40 AM" },
  { title: "Modified", date: "Mon 27, 2021 at 04: 10 AM" },
  { title: "Last Opened", date: "Wed 34, 2023 at 12: 18 PM" },
];

const TimeSlot = () => {
  return (
    <Box>
      {data.map((item, index) => (
        <Box key={index} className="flex items-center mb-2 justify-between">
          <Typography
            variant="caption"
            className="font-semibold text-xs text-[var(--gray-light)]"
          >
            {item.title}
          </Typography>
          <Typography
            variant="caption"
            className="font-semibold text-xs text-[var(--gray-dark)]"
          >
            {item.date}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TimeSlot;
