import React,{ useEffect, useState } from 'react';
import { LiveKitRoom, VideoConference } from '@livekit/components-react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ROOM_SERVER =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'
    : ''; // Empty string = same origin in production

function Room() {
  const { roomName } = useParams();
  const [searchParams] = useSearchParams();
  const userName = searchParams.get('userName');
  const [token, setToken] = useState('');

useEffect(() => {
  const getToken = async () => {
    try {
      const res = await axios.post(`${ROOM_SERVER}/get-token`, {
        roomName,
        userName,
      });
      console.log('Received token:', res.data.token, typeof res.data.token);
      setToken(res.data.token);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  getToken();
}, [roomName, userName]);


  if (!token) return <div>Connecting...</div>;

  return (
    <LiveKitRoom
      token={token}
      serverUrl="wss://video-conference-ge4p2pav.livekit.cloud"
      connect={true}
    >
      <VideoConference />
    </LiveKitRoom>
  );
}

export default Room;
