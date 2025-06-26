const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { AccessToken } = require('livekit-server-sdk');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));


const API_KEY = process.env.LIVEKIT_API_KEY;
const API_SECRET = process.env.LIVEKIT_API_SECRET;

app.get('/', (req, res) => res.send('Hello from backend'));

app.post('/get-token', async (req, res) => {
  const { roomName, userName } = req.body;
  console.log('POST /get-token received:', { roomName, userName });

  if (!roomName || !userName) {
    return res.status(400).json({ error: 'Missing roomName or userName' });
  }

  try {
    const token = new AccessToken(API_KEY, API_SECRET, { identity: userName });
    token.addGrant({ roomJoin: true, room: roomName });

    const jwt = await token.toJwt(); 
    console.log('Generated JWT token:', jwt);
    res.json({ token: jwt });
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Token generation failed' });
  }
});

app.get(/^\/(?!api|get-token).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

