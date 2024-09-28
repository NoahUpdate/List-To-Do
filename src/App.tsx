import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
    <div className="fondo">
      <div className="card_main">
        <div className="card_main2">
				<div>
					<a
						href="https://vitejs.dev"
						target="_blank"
            >
						<img
							src={viteLogo}
							className="logo"
							alt="Vite logo"
              />
					</a>
					<a
						href="https://react.dev"
						target="_blank"
            >
						<img
							src={reactLogo}
							className="logo react"
							alt="React logo"
              />
					</a>
				</div>
			<h1>List To Do</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					Hiciste {count} clicks
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			</div>
              </div>
              </div>

	);
}

export default App;
