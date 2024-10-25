// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reminder = { email, title, startTime, endTime, reminderTime };
    await axios.post('http://localhost:8080/api/reminders', reminder);
    alert('Reminder set!');
    window.location.reload();

  };

  return (
    <div>
      <h1>Set Reminder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Start Time:</label>
          <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        </div>
        <div>
          <label>End Time:</label>
          <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        </div>
        <div>
          <label>Reminder Time:</label>
          <input type="datetime-local" value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} required />
        </div>
        <button type="submit">Set Reminder</button>

      </form>
    </div>
    
  );
};

export default App;
