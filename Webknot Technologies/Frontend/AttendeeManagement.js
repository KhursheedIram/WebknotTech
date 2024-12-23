import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AttendeeManagement() {
  const [attendees, setAttendees] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    try {
      const response = await axios.get('/api/attendees');
      setAttendees(response.data);
    } catch (error) {
      console.error('Error fetching attendees:', error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post('/api/attendees', { name });
      fetchAttendees();
      setName('');
    } catch (error) {
      console.error('Error adding attendee:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/attendees/${id}`);
      fetchAttendees();
    } catch (error) {
      console.error('Error deleting attendee:', error);
    }
  };

  return (
    <div>
      <h2>Attendee Management</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <button onClick={handleAdd}>Add Attendee</button>
      <ul>
        {attendees.map(attendee => (
          <li key={attendee.id}>
            {attendee.name}
            <button onClick={() => handleDelete(attendee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendeeManagement;
