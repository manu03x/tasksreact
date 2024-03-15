// Task.jsx
import React from 'react';

const Task = ({ task, onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      <span style={{ marginLeft: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span> <span>{task.completed ? "Completada" : ''}</span>
    </div> 
  );
};

export default Task;
