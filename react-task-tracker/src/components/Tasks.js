import { useState } from 'react';

const Tasks = () => {
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
      id: 3,
      text: 'Super Market',
      day: 'Feb 5th at 3:30pm',
      reminder: true,
    },
  ]);
  return (
    <>
      {' '}
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}{' '}
    </>
  );
};

export default Tasks;
