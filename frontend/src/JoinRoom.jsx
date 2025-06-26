import React, { useState } from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700">🎥 Join a Room</h2>

        <input
          type="text"
          placeholder="Room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleJoin}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Join Room
        </button>
      </div>
    </div>
  );
}

export default JoinRoom;
