import React from 'react';
import SettingsContext from './context/data.js';

import ToDo from './components/todo/todo-connected.js';

export default function App(props) {
  return (
    <>
      <SettingsContext>
        <ToDo />
      </SettingsContext>
    </>
  );
}
