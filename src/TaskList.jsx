// TaskList.jsx
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskToggle }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onToggle={() => onTaskToggle(task.id)} />
      ))}
    </div>
  );
};

export default TaskList;
