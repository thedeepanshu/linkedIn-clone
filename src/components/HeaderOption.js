import React from "react";
import "../styles/HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const HeaderOption = ({ avatar, Icon, title, toggle }) => {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" id={toggle?'toggle__menu':''}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon"
          src={user && user.photoUrl ? user.photoUrl : ""}
        >
          {user && !user.photoUrl ? (
            user.email[0]
          ) : (
            <Avatar className="headerOption__icon" />
          )}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
