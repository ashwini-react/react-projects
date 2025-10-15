import React, {useState} from 'react';
import './App.css';

const App = () => {
  const[count, setCount] = useState(0);
  const[prevCount, setPrevCount] = useState(0);
  const[history, setHistory] = useState([]);
  const [isSmartMode, setIsSmartMode] = useState(false);

  const increment = () => {
    setPrevCount(count);
    const newCount = count + 1;
    setCount(newCount);
  setHistory([`Incremented from ${count} to ${newCount}`, ...history, ]);
  }

  const decrement = () => {
    setPrevCount(count);
    const newCount = count -1;
    setCount(newCount);
  setHistory([`Decremented from ${count} to ${newCount}`, ...history, ]);
  }

  const reset = () => {
    setPrevCount(count);
    const newCount = 0;
    setCount(newCount);
    setHistory([`reset from ${count} to ${newCount}`, ...history, ]);
  }

  const incrementByFive = ()=>{
    setPrevCount(count);
    const newCount = count + 5;
    setCount(newCount);
    setHistory([`incrementby5 from ${count} to ${newCount}`, ...history, ]);
  }

  // const save = () => {
  //   setHistory([count,...history])
  // }

  const handleToggle = () => {
    setIsSmartMode(!isSmartMode);
  }

  return(
    <div className='counter-app'>
      <div className="header">
        <h2 className="title">Smart Counter</h2>
        <button className={`toggle ${isSmartMode} ? "active" : ""`} onClick={handleToggle}></button>
      </div>
        <h3>Previous :{prevCount}</h3>
        <h2>Current :{count} </h2>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={incrementByFive}>Increment by 5</button>
          <button onClick={() => {setHistory([count, ...history]); }}>Save Count</button>
        </div>
        <div className="history">
          <h3>History</h3>
          <ul type="none">
            {
              history.map((value, index)=>(
              <li key={index}>{value}</li>
            ))
            }
          </ul>
        </div>
    </div>
  )
}

export default App;
