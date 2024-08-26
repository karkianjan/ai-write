import React from "react";
import { dashboardSidebarItems } from "@/path-to-your-items";

const SidebarItem = ({ item }) => {
  return (
    <div className="sidebar-item">
      {item.icon && <item.icon className="sidebar-icon" />}
      {item.text && <span className="sidebar-text">{item.text}</span>}
      {item.subMenus && (
        <div className="submenu">
          {item.subMenus.map((subItem, index) => (
            <div key={index} className="submenu-item">
              {subItem.icon && <subItem.icon className="submenu-icon" />}
              {subItem.text && <span className="submenu-text">{subItem.text}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      {dashboardSidebarItems.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
