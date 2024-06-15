"use client";
import { ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import SidebarMenuItems from "./SidebarMenuItems";
import "../styles/Prosidebar.css";

const Sidebar = ({
  collapsed,
  toggleSidebar,
  handleMenuItemClick,
  activeMenu,
}) => {
  return (
    <>
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        >
          <ProSidebar
            collapsed={collapsed}
            breakPoint="md"
            className="fixed inset-y-0 left-0 z-30 pt-[68px] md:hidden h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarMenuItems
              activeMenu={activeMenu}
              handleMenuItemClick={handleMenuItemClick}
              collapsed={collapsed}
            />
          </ProSidebar>
        </div>
      )}

      <ProSidebar
        collapsed={collapsed}
        breakPoint="md"
        className="fixed inset-y-0 left-0 z-10 pt-[68px] hidden md:block h-full overflow-y-auto"
      >
        <SidebarMenuItems
          activeMenu={activeMenu}
          handleMenuItemClick={handleMenuItemClick}
          collapsed={collapsed}
        />
      </ProSidebar>
    </>
  );
};

export default Sidebar;
