import { useState } from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import ResetButton from './components/ResetButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const buttonStyle = { backgroundColor: 'lightgreen' };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <ResetButton
        count={count}
        resetCount={resetCount}
        buttonStyle={buttonStyle}
      />
    </div>
  );
}

export default App;
