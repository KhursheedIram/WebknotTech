import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventManagement() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', location: '', date: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', form);
      fetchEvents();
      setForm({ name: '', description: '', location: '', date: '' });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <h2>Event Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <input type="text" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
        <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        <button type="submit">Add Event</button>
      </form>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - {event.date}
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventManagement;
