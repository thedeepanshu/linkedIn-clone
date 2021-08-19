import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "../Firebase";
import firebase from "firebase";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [inputDisc, setInputDisc] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: inputDisc,
      message: input,
      photoUrl: user.photoUrl ? user.photoUrl : "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    setInputDisc("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <form>
            <div>
              <CreateIcon />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Write what you want to say..."
              />
            </div>
            <div>
              <CreateIcon />
              <input
                value={inputDisc}
                onChange={(e) => setInputDisc(e.target.value)}
                type="text"
                placeholder="Write a description for your post..."
              />
            </div>
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;