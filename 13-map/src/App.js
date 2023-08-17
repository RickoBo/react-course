import { useState } from 'react';
import Counter from './components/Counter';
import Button from './components/Button';

import './App.css';

const stringArr = [
  'Click me pls',
  'Click me',
  'Press me',
  'Hit me',
  'Click me again',
  'Hit me one more time'
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
}

  return <div className="App">
    <Counter count={count}/>
    {stringArr.map((string)=> {
      return <Button onClick={incrementCount}
      text={string} key={string}/>
    })}
  </div>;
}

export default App;
