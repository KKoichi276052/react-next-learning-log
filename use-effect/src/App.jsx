import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch";
// import QuoteFetcher from "./QuoteFetcher";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("");

  // will be called at first rendering and every time rerendered like state is updated
  // can have second argument that takes in array of state which can target to be a trigger of useEffect
  // if array is empty is will be called only once when at first rendering
  useEffect(function myEffect() {
    console.log("effect called");
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <input type="text" value={name} onChange={handleChange} /> */}
      {/* <QuoteFetcher /> */}
      <ProfileViewerWithSearch />
    </>
  );
}

export default App;
