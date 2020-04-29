import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./style.css";
import InfoBar from "../infoBar";
import Input from "../input/Input";
import Messages from "../messages";
import SideBar from "../sideBar";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomUsers, setRoomUsers] = useState([]);
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    socket = io(process.env.REACT_APP_BACKEND_URL);
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (newmessage) => {
      setMessages((message) => [...message, newmessage]);
    });

    socket.on("roomData", (room) => {
      setRoomUsers(room);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <InfoBar
        room={room}
        toggleSideBar={() => setShowSideMenu(!showSideMenu)}
      />
      <div className="innerContainer">
        <SideBar
          users={roomUsers}
          visibility={showSideMenu}
          closeSideBar={() => setShowSideMenu(false)}
        />
        <div className="container">
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
