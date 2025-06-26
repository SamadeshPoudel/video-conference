import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinRoom() {
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (roomName && userName) {
      navigate(`/room/${roomName}?userName=${userName}`);
    }
  };

  return (
    <div>
      <h2>Join a Room</h2>
      <input placeholder="Room name" value={roomName} onChange={e => setRoomName(e.target.value)} />
      <input placeholder="Your name" value={userName} onChange={e => setUserName(e.target.value)} />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
}

export default JoinRoom;
