import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import profile from "../../assests/images/man.png";
import { Link, NavLink } from "react-router-dom";
const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "/user",
      name: "user",
      icon: <PersonIcon />,
    },
    {
      path: "/myPost",
      name: "My Post",
      icon: <ShoppingBagIcon />,
    },
    {
      path: "/addNew",
      name: "Add New",
      icon: <AddCircleOutlineOutlinedIcon />,
    },
    {
      path: "/stats",
      name: "Stats",
      icon: <QueryStatsIcon />,
    },
    {
      path: "/notification",
      name: "Notification",
      icon: <NotificationsNoneIcon />,
    },
    // {
    //   path: "/setting",
    //   name: "Setting",
    //   icon: <SettingsIcon />,
    // },
    {
      path: "/profile",
      name: "Profile",
      icon: <AccountBoxIcon />,
    },
    // {
    //   // path: "/",
    //   name: "Log Out",
    //   icon: <LogoutIcon />,
    // },
  ];
  return (
    <div className="containers col-12 d-flex">
      <div className="sideBarWrap col-lg-3">
        <div className="top d-flex align-items-center justify-content-center ">
          <img src={profile} alt="profile" className="w-25" />
          <h5 className="mt-2 ps-2">KD Ansari</h5>
        </div>
        {menuItem.map((menu, ind) => (
          <NavLink
            to={menu.path}
            key={ind}
            className="NavItems nav-link d-flex ps-5 align-items-center mb-2 "
            activeclassName="active"
          >
            <div className="icons">{menu.icon}</div>
            <div className="menuItems ps-2">{menu.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="rightBar col-lg-9">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
