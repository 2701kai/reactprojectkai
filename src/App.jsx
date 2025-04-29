import "./App.css";
import { useState } from "react";
import TerminalAliases from "../components/pages/aliases/terminal-aliases";

function App() {
  const [showAliases, setShowAliases] = useState(false);
  const handleClick = () => {
    setShowAliases(true);
  };

  return (
    <>
      <img src="./hate.png" alt="Hass!" className="mx-auto" />
      {/* <h1 className="text-3xl">kai + React:</h1> */}

      <div className=" flex-1/2 p-10">
        <button onClick={handleClick} className="btn btn-primary">
          Show Terminal Aliases
        </button>

        {showAliases && <TerminalAliases />}
      </div>

      <img src="react-whaaat-s.webp" alt="Whaaaat?" className="mx-auto" />

      {/* <div className="flex justify-center items-center min-h-screen">
        <img src="react-whaat-xxl.webp" alt="Whaaaat?" />
      </div> */}
    </>
  );
}

export default App;
