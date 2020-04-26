import React from 'react';
import './style.css';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form >
      <input
        className='input'
        type="text"value={message}
        placeholder='Type a message...'
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e): null}
      />
      <button className='sendButton' onClick={e => sendMessage(e)}>send</button>
    </form>
  )
}

export default Input
