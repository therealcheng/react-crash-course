import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className='container'>
      <Header />
      <Tasks />
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
