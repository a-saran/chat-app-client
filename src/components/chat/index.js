import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  let socket;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(process.env.REACT_APP_BACKEND_URL)
    console.log(socket)

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {

    })

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [location.search])

  return (
    <div>
      <h1>Chat</h1>
    </div>
  )
}

export default Chat
