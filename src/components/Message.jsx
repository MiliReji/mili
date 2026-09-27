import { useState } from "react";

function Message() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="message-section">
      <h2 className="section-title">A Letter For You 💌</h2>

      {!opened ? (
        <button className="envelope-btn" onClick={() => setOpened(true)}>
          <span className="envelope">💌</span>
          <p>Click to open your letter</p>
        </button>
      ) : (
        <div className="letter">
          <p>Dear Mili,</p>
          <p>
            Happy 20th birthday! 🎉 Even though we've never met in person, you've
            become such a special part of my life. Distance means nothing when
            someone means so much.
          </p>
          <p>
            I hope this year brings you everything you've been dreaming of —
            endless laughter, good health, amazing opportunities, and people who
            love you as much as you deserve. You're kind, funny, and one of the
            most genuine people I know.
          </p>
          <p>
            Thank you for being you. Here's to many more birthdays, and one day,
            hopefully, meeting in person. 🌸
          </p>
          <p className="signature">
            With love, <br />
            Your friend 💖
          </p>
        </div>
      )}
    </section>
  );
}

export default Message;