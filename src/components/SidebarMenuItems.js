"use client";
import { Box, Typography } from "@mui/material";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import FileCopySharpIcon from "@mui/icons-material/FileCopySharp";
import AccessAlarmsSharpIcon from "@mui/icons-material/AccessAlarmsSharp";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import PhotoCameraBackOutlinedIcon from "@mui/icons-material/PhotoCameraBackOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { LinearProgress, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "../styles/Prosidebar.css";

const SidebarMenuItems = ({ handleMenuItemClick, activeMenu, collapsed }) => {
  const menuItems = [
    { key: "all-files", label: "All Files", icon: <Inventory2SharpIcon /> },
    { key: "recent", label: "Recent", icon: <AccessAlarmsSharpIcon /> },
    { key: "docs", label: "Docs", icon: <FileCopySharpIcon /> },
    { key: "photos", label: "Photos", icon: <PhotoCameraBackOutlinedIcon /> },
    { key: "trash", label: "Trash", icon: <DeleteOutlineOutlinedIcon /> },
  ];
  return (
    <>
      <Box className="flex items-center p-2ss bg-[var(--sidebar-background)] h-12 p-2  rounded-lg mb-4">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="imageName"
          className="w-8 h-8 rounded-full mr-4"
        />
        {!collapsed && (
          <Box>
            <h2 className="text-sm text-[var(--black)] font-semibold">
              {"Rohit Kashyap"}
            </h2>
            <p className="text-xs font-semibold !text-[var(--gray-dark)]">
              {"Developer"}
            </p>
          </Box>
        )}
      </Box>
      <Box>
        <Typography
          variant="h6"
          className="text-[var(--gray-light)] !mt-3 !text-[11px]"
        >
          General
        </Typography>
        <Menu iconShape="square">
          <MenuItem
            className={activeMenu === "overview" ? "active" : ""}
            onClick={() => handleMenuItemClick("overview")}
          >
            <AutoAwesomeSharpIcon />
            OverView
          </MenuItem>
          <MenuItem
            className={activeMenu === "setting" ? "active" : ""}
            onClick={() => handleMenuItemClick("setting")}
          >
            <SettingsIcon />
            Setting
          </MenuItem>
        </Menu>
      </Box>
      <Typography
        variant="h6"
        className="text-[var(--gray-light)] !text-[11px]"
      >
        Main
      </Typography>

      <Menu iconShape="square">
        {menuItems.map((item) => (
          <MenuItem
            key={item.key}
            className={activeMenu === item.key ? "active" : ""}
            onClick={() => handleMenuItemClick(item.key)}
          >
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      <Box className="py-3 border-t border-[--border] rounded mt-5 w-full">
        <Box className="flex items-center mb-2 justify-between">
          <Typography
            variant="h6"
            className="text-[var(--text)] pr-1 !font-semibold  !text-[12px]"
          >
            Storage
          </Typography>
          <Typography
            variant="h6"
            className="text-[var(--navy-blue)] !font-semibold  !text-[12px]"
          >
            Upgraded
          </Typography>
        </Box>
        <LinearProgress variant="determinate" value={50} className="my-3" />
        <Button
          variant="contained"
          startIcon={<AddIcon className="w-4 h-4 mr-1" />}
          className="mt-4 w-full !py-3 !font-semibold rounded-none whitespace-nowrap !text-sm text-[--white] !capitalize !bg-[--navy-blue]"
        >
          {!collapsed && "Create New"}
        </Button>
      </Box>
    </>
  );
};

export default SidebarMenuItems;
