import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import produce from "immer";
import "./App.css";

function App() {
  const [count, setCount] = useState({
    count: 0,
    x: {
      y: {
        count: 0,
        count2: 0,
      },
      count: 0,
    },
  });
  console.log("count Top", count);

  // This issue occurs
  useEffect(() => {
    console.log("count.count + 3", count.count);
  }, [count.x]);

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
        <button
          onClick={() => {
            // We cant do this
            // count.x.y.count = count.x.y.count + 1;
            // count.x.count = count.x.count + 2;
            // count.count = count.count + 3;
            // console.log("count", count);
            setCount(
              produce((draft) => {
                draft.x.y.count = count.x.y.count + 1;
                draft.x.count = count.x.count + 2;
                draft.count = count.count + 3;
              })
            );
          }}>
          count is {count.count}
        </button>
        <div>X is {count.x.count}</div>
        <div>XY is {count.x.y.count}</div>
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
