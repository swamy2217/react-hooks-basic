import React from 'react';

import HookCounter1 from './Components-Hooks/1';
import HookCounter2 from './Components-Hooks/2';
import HookObject from './Components-Hooks/3';
import HooksArray from './Components-Hooks/4';
import Todo from './Components-Hooks/5Todo';

function App() {
  return (
    <div className="App">
      <Todo />
      <HooksArray />
      <HookObject />
      <HookCounter2 />
      <HookCounter1 />
    </div>
  );
}

export default App;
