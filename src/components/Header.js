import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="left__container">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="linkedin_icon"
        />
        <div className="left__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right__container">
        <HeaderOption toggle={true} Icon={HomeIcon} title="Home" />
        <HeaderOption
          toggle={true}
          Icon={SupervisorAccountIcon}
          title="My Network"
        />
        <HeaderOption toggle={true} Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption toggle={true} Icon={ChatIcon} title="Messaging" />
        <HeaderOption
          toggle={true}
          Icon={NotificationsIcon}
          title="Notifications"
        />
        {user && (
          <div onClick={logoutApp} title="Logout">
            <HeaderOption avatar={true} title="Me" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
