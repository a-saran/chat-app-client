import React from 'react';
import ReactEmoji from 'react-emoji';
import './style.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  let TrimedName = name.trim().toLowerCase();

  if(user === TrimedName){
    isSentByCurrentUser = true;
  }

  if(user === 'admin') {
    return (
      <div className="messageContainer justifyCenter">
        <div className="messageBox backgroundGrey">
          <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    )
  }

  return isSentByCurrentUser
    ? (<div className="messageContainer justifyEnd">
        <div className="messageBox backgroundBlue">
          {/* <p className="sentText pt-10">{TrimedName}</p> */}
          <p className="messageText">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>)
    : (<div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="sentText">{user}</p>
          <p className="messageText">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>)
}

export default Message;
