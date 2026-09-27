import { useState } from "react";
import secretGif from "../assets/ralph-secret.webp";

function Secret() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="secret-section">
      <h2 className="section-title">🤫 One More Thing...</h2>

      {!revealed ? (
        <button className="secret-btn" onClick={() => setRevealed(true)}>
          👀 See Ralph's Biggest Secret
        </button>
      ) : (
        <div className="secret-reveal">
          <img src={secretGif} alt="Ralph's biggest secret" className="secret-gif" />
          <p className="shame-text">SHAME ON YOU 😤</p>
        </div>
      )}
    </section>
  );
}

export default Secret;