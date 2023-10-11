import { useState } from 'react';
import Header from './components/header/Header';
import './global.css';
import ToDoAll from './components/to-do-all/ToDoAll';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="wrapper">
        <ToDoAll />
      </div>
    </div>
  );
}

export default App;
