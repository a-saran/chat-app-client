import React, { useRef } from "react";
import "./style.css";

const Input = ({ message, setMessage, sendMessage }) => {
  const inputRef = useRef();

  return(
    <form className="input-container">
      <input
        className="input"
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        ref={inputRef}
      />
      <button className="sendButton" onClick={(e) => {
        sendMessage(e);
        inputRef.current.focus();
      }}>
        send
      </button>
    </form>
  );
}

export default Input;
