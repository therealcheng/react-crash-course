import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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
      reminder: true,
    },
    {
      id: 4,
      text: 'Super Market',
      day: 'Feb 5th at 3:30pm',
      reminder: true,
    },
  ]);
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
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
