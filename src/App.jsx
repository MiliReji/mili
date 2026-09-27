import { useState, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Message from "./components/Message";
import Secret from "./components/Secret";
import music from "./music/birthday.mp3";

function App() {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((err) => console.log("Audio error:", err));
    }
  };

  return (
    <div className="app">
      <audio ref={audioRef} src={music} loop />

      {!started && (
        <div className="welcome-screen" onClick={handleStart}>
          <div className="welcome-content">
            <h1>🎉 A Surprise for Mili 🎉</h1>
            <p>Click anywhere to begin</p>
            <button className="start-btn">Open Your Gift 💝</button>
          </div>
        </div>
      )}

      {started && (
        <div className="content">
          <Confetti />
          <Hero />
          <Gallery />
          <Message />
          <Secret />
          <footer className="footer">
            Made with 💖 for Mili's 20th Birthday
          </footer>
        </div>
      )}
    </div>
  );
}

// Simple CSS confetti
function Confetti() {
  const pieces = Array.from({ length: 50 });
  const colors = ["#ff6b9d", "#ffd93d", "#6bcb77", "#4d96ff", "#c780fa"];

  return (
    <div className="confetti-container">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default App;