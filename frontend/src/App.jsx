import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoinRoom from './JoinRoom';
import Room from './Room';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinRoom />} />
        <Route path="/room/:roomName" element={<Room />} />
      </Routes>
    </Router>
  );
}

export default App;
