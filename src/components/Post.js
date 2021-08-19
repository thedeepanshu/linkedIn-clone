import React, { forwardRef } from "react";
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InputOption from "./InputOption";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={props.photoUrl}>{props.name[0]}</Avatar>
        <div className="post__info">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{props.message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" />
        <InputOption Icon={SendOutlinedIcon} title="Send" />
      </div>
    </div>
  );
});

export default Post;
