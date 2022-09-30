import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "./lib/slices/counterSlice";
import { change } from "./lib/slices/randomSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const random = useSelector((state) => state.random);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        {/* <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a> */}
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Redux + React</h1>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className='card'>
        <button onClick={() => dispatch(incrementByAmount(100))}>
          100 + {count}
        </button>
        <p>By Amount</p>
      </div>
      <div className='card'>
        <button onClick={() => dispatch(change())}>
          Random {random.value}
        </button>
        <p>Any Random Number {random.randomTotal}</p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
