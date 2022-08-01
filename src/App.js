
import { useState } from 'react';
import './App.css';
import Button from "./Button";
function App() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count - 1);
  }
  const resetCount = () => {
    setCount(0);
  }
  return (
    <div className='app' >
      <div>
        <div className='count'>
          <h3>Counter App</h3>
          <h1>{count}</h1>
        </div>
        <div className='buttons'>
          <Button title={"Decrement"} action={decrementCount}/>
          <Button title={"Increment"} action={incrementCount}/>
          <Button title={"reset"} action={resetCount}/>
        </div>
      </div>

    </div>
  );
}

export default App;
