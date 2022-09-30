import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useBearStore from "./stores/counterStore";
import shallow from "zustand/shallow";

function App() {
  // const [count, setCount] = useState(0);
  const [count, bears, incc, incp, incx] = useBearStore(
    (state) => [
      state.count,
      state.bears,
      state.increaseCount,
      state.increasePopulation,
      state.increaseX,
    ],
    shallow
  );

  console.log("rerenderes");

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={incp}>bears is {bears}</button>
        <button onClick={incc}>count is {count}</button>
        <button onClick={incx}>State Change No Rerender</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
