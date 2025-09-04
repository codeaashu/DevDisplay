import React, { useState } from 'react';

const Hackathons = () => {
  const [showModal, setShowModal] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [joinedRoom, setJoinedRoom] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState('');

  const handleScreenshotUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0]);
    }
  };

  const handleCreateRoom = () => {
    if (!roomName.trim()) {
      setError('Room name is required');
      return;
    }
    if (rooms.find((r) => r.name === roomName.trim())) {
      setError('Room already exists');
      return;
    }
    const newRoom = { name: roomName.trim(), screenshot };
    setRooms([...rooms, newRoom]);
    setJoinedRoom(newRoom);
    setShowModal(false);
    setRoomName('');
    setScreenshot(null);
    setError('');
  };

  const handleJoinRoom = () => {
    if (!roomName.trim()) {
      setError('Room name is required');
      return;
    }
    const foundRoom = rooms.find((r) => r.name === roomName.trim());
    if (!foundRoom) {
      setError('Room not found');
      return;
    }
    setJoinedRoom(foundRoom);
    setShowModal(false);
    setRoomName('');
    setScreenshot(null);
    setError('');
  };

  return (
    <div>
      <h2>Virtual Hackathon Rooms</h2>
      <button onClick={() => setShowModal(true)} style={{ margin: '10px 0' }}>
        Create/Join Room
      </button>
      {joinedRoom && (
        <div style={{ margin: '16px 0', padding: '12px', background: '#e3f2fd', borderRadius: 8, color: '#222' }}>
          <strong>Joined Room:</strong> {joinedRoom.name}
          {joinedRoom.screenshot && (
            <div style={{ marginTop: 8 }}>
              <img
                src={URL.createObjectURL(joinedRoom.screenshot)}
                alt="Screenshot"
                style={{ maxWidth: 200, maxHeight: 120, borderRadius: 4, border: '1px solid #ccc' }}
              />
            </div>
          )}
        </div>
      )}
      {rooms.length > 0 && (
        <div style={{ margin: '16px 0' }}>
          <strong>Available Rooms:</strong>
          <ul style={{ marginTop: 8 }}>
            {rooms.map((room, idx) => (
              <li key={room.name + idx} style={{ marginBottom: 4 }}>
                {room.name} {room.screenshot && <span style={{ color: '#888' }}>(Screenshot uploaded)</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: 24,
              borderRadius: 8,
              minWidth: 320,
              position: 'relative',
              color: '#222',
            }}
          >
            <h3>Virtual Hackathon Room</h3>
            <input
              type="text"
              placeholder="Room Name or Code"
              style={{ width: '100%', margin: '10px 0' }}
              value={roomName}
              onChange={(e) => {
                setRoomName(e.target.value);
                setError('');
              }}
            />
            <div style={{ margin: '10px 0' }}>
              <label>Upload Screenshot (optional): </label>
              <input type="file" accept="image/*" onChange={handleScreenshotUpload} />
              {screenshot && <span style={{ marginLeft: 8 }}>{screenshot.name}</span>}
            </div>
            {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
            <button style={{ marginRight: 8 }} onClick={handleJoinRoom}>
              Join
            </button>
            <button style={{ marginRight: 8 }} onClick={handleCreateRoom}>
              Create
            </button>
            <button
              onClick={() => {
                setShowModal(false);
                setRoomName('');
                setScreenshot(null);
                setError('');
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hackathons;
