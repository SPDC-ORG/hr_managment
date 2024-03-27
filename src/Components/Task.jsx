import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Low');
  const [newTaskStatus, setNewTaskStatus] = useState('Uncompleted');

  useEffect(() => {
    // Backend code removed
  }, []);

  const handleAddTask = async () => {
    // Backend code removed
  };

  const handleRemoveTask = async (taskId) => {
    // Backend code removed
  };

  // Return JSX
  return (
    <div className="container mx-auto h-screen bg-white">
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 mr-2 w-64"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="date"
          className="border border-gray-300 px-4 py-2 mr-2"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
        />
        <select
          className="border border-gray-300 px-4 py-2 mr-2"
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Priority</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="border px-4 py-2">{task.description}</td>
                <td className="border px-4 py-2">{task.date}</td>
                <td className="border px-4 py-2">{task.priority}</td>
                <td className="border px-4 py-2">{task.status}</td>
                <td className="border px-4 py-2">
                  <button
                    className="text-red-500"
                    onClick={() => handleRemoveTask(task._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task;
