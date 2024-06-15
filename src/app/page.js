"use client";
import Header from "@/components/Header";
import "react-pro-sidebar/dist/css/styles.css";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import "../styles/Prosidebar.css";
// import "../app/globals.js"
import TabView from "@/common/TabView";
import { Box, Grid } from "@mui/material";
import DataGridTable from "@/common/DataGridTable";
import FolderIcon from "@mui/icons-material/Folder";
import SummarizeIcon from "@mui/icons-material/Summarize";
import Resources from "@/common/Resources";

const data = [
  {
    id: 1,
    name: "Rohit kashyap",
    iconName: (
      <FolderIcon className="text-[var(--navy-blue)] mr-3 w-5 h-5 relative bottom-[2px]" />
    ),
    lastModified: "2024-06-14",
    members: 3,
  },
  {
    id: 2,
    name: "Gurpreet Sir",
    iconName: (
      <SummarizeIcon className="text-[var(--active-green)] mr-3 w-5 h-6 relative bottom-[1px]" />
    ),
    lastModified: "2024-06-15",
    members: 5,
  },
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("all-files");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuItemClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <Box className="flex min-h-screen">
      <Box className="flex h-screen w-full">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
          activeMenu={activeMenu}
          handleMenuItemClick={handleMenuItemClick}
        />
        <Box className="flex-grow w-full overflow-auto pt-16 px-5 ">
          <Box className="mt-3">
            <TabView />
          </Box>

          <Grid container spacing={3} className="breakPointLargeWidth">
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <Box className="tableview mt-5">
                <DataGridTable data={data} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <Box className="bg-[var(--sidebar-background)] h-[82vh] p-4">
                <Resources />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
