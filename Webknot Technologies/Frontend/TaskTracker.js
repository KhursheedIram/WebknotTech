import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskTracker() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`/api/tasks/${id}`, { status });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Task Tracker</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} - {task.status}
            <button onClick={() => updateStatus(task.id, 'Completed')}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTracker;
