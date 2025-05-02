import confetti from "canvas-confetti";
import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

import TerminalAliases from "../components/aliases/terminal-aliases";

function App() {
  const [showAliases, setShowAliases] = useState(false);

  const toggleAliases = () => {
    setShowAliases((prev) => !prev);
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      <div className="text-center flex flex-col items-center justify-center space-y-6">
        <img src="./hate.png" alt="Hass!" onClick={launchConfetti} />
        <img
          src={reactLogo}
          onClick={launchConfetti}
          className="logo react"
          alt="React logo"
        />
        <button onClick={toggleAliases} className="btn btn-primary">
          {showAliases ? "Hide Terminal Aliases" : "Show Terminal Aliases"}
        </button>

        {showAliases && <TerminalAliases />}
      </div>

      <img src="react-whaaat-s.webp" alt="Whaaaat?" className="mx-auto py-8" />
    </>
  );
}

export default App;
