import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor',
      day: 'Feb 5th at 3:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Library',
      day: 'Feb 5th at 3:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Bank',
      day: 'Feb 5th at 3:30pm',
      reminder: false,
    },
    {
      id: 4,
      text: 'Super Market',
      day: 'Feb 5th at 3:30pm',
      reminder: false,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;

// ! Notes
/*
className = css class
for app = htmlFor

Can only return 1 component
*/
