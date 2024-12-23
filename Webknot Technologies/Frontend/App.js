import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventManagement from './components/EventManagement';
import AttendeeManagement from './components/AttendeeManagement';
import TaskTracker from './components/TaskTracker';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Event Dashboard</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Event Management</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/attendees">Attendee Management</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tasks">Task Tracker</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<EventManagement />} />
          <Route path="/attendees" element={<AttendeeManagement />} />
          <Route path="/tasks" element={<TaskTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
