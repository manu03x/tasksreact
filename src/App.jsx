// App.jsx
import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Hacer la compra', completed: false },
    { id: 2, title: 'Estudiar para el examen', completed: false },
    { id: 3, title: 'Ir al gimnasio', completed: false }
  ]);

  const handleTaskToggle = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} onTaskToggle={handleTaskToggle} />
    </div>
  );
};

export default App;
