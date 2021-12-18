import React from 'react';
import './App.css'

import HookCounter1 from './Components-Hooks/1';
import HookCounter2 from './Components-Hooks/2';
import HookObject from './Components-Hooks/3';
import HooksArray from './Components-Hooks/4';
import Todo from './Components-Hooks/5Todo';
import UseEffectHook from './Components-Hooks/6useEffect';
import UseEffectTwo from './Components-Hooks/7useEffect';
import MouseContainer from './Components-Hooks/8useEffect';
import IntervalHookCounter from './Components-Hooks/9useEffect-IntervalCounter';
import UseEffectFetchData from './Components-Hooks/10useEffect-FectchData1';
import FetchDataWithgetRecord from './Components-Hooks/11useEffect-FetchData2';
import Login from './Components-Hooks/5bLogin';

function App() {
  return (
    <div className="App">
      <Login />
      <FetchDataWithgetRecord />
      <UseEffectFetchData />
      <IntervalHookCounter />
      <MouseContainer />
      <UseEffectTwo />
      <UseEffectHook />
      <Todo />
      <HooksArray />
      <HookObject />
      <HookCounter2 />
      <HookCounter1 />
    </div>
  );
}

export default App;
