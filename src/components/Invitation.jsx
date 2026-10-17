
import { useEffect, useRef, useState } from "react";

const WEDDING_DATE = new Date("2026-11-08T11:00:00+05:30");

export default function Invitation() {
  const canvasRef = useRef(null);
  const scratching = useRef(false);
  const revealedRef = useRef(false);

  const [revealed, setRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  // Draw the scratch-card cover
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(
      0,
      0,
      rect.width,
      rect.height
    );

    gradient.addColorStop(0, "#e8d5ad");
    gradient.addColorStop(0.5, "#c6a568");
    gradient.addColorStop(1, "#f0dfba");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Gold-card texture
    for (let i = 0; i < 350; i++) {
      ctx.fillStyle = "rgba(255,255,255,0.17)";
      ctx.fillRect(
        Math.random() * rect.width,
        Math.random() * rect.height,
        2,
        2
      );
    }

    // Scratch instructions
    ctx.fillStyle = "#fffaf0";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "12px Georgia";
    ctx.fillText(
      "✧  SCRATCH TO REVEAL  ✧",
      rect.width / 2,
      rect.height / 2
    );

    ctx.globalCompositeOperation = "destination-out";
  }, []);

  // Scratch interaction
  const scratch = (event) => {
    if (revealedRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 23, 0, Math.PI * 2);
    ctx.fill();

    // Check how much of the cover has been scratched away
    const pixels = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    ).data;

    let erased = 0;
    let total = 0;

    for (let i = 3; i < pixels.length; i += 4 * 32) {
      total++;

      if (pixels[i] < 50) {
        erased++;
      }
    }

    if (total > 0 && erased / total > 0.38) {
      revealedRef.current = true;
      setRevealed(true);
    }
  };

  // Countdown timer
  useEffect(() => {
    if (!revealed) return;

    const updateCountdown = () => {
      const diff = Math.max(
        0,
        WEDDING_DATE.getTime() - Date.now()
      );

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [revealed]);

  return (
    <section className="save-date-section">
      {/* Decorative ornament */}
      <div className="save-date-ornament" aria-hidden="true">
        <span>✧</span>
        <span className="ornament-line" />
        <span>♡</span>
        <span className="ornament-line" />
        <span>✧</span>
      </div>

      {/* Heading */}
      <p className="save-date-eyebrow">
        A LITTLE SURPRISE
      </p>

      <h2 className="save-date-title">
        A date to cherish,
        <span>a memory forever.</span>
      </h2>

      <p className="save-date-intro">
        There’s a little something waiting to be revealed.
        <br />
        Scratch below to discover our special day.
      </p>

      {/* Scratch card */}
      <div
        className={`scratch-card ${
          revealed ? "revealed" : ""
        }`}
      >
        <div className="scratch-content">
          <span className="scratch-heart">♡</span>

          <p className="save-date-label">SAVE THE DATE</p>

          <h2 className="scratch-date">
            {String(WEDDING_DATE.getDate()).padStart(2, "0")}
            <span> · </span>
            {String(WEDDING_DATE.getMonth() + 1).padStart(2, "0")}
            <span> · </span>
            {WEDDING_DATE.getFullYear()}
          </h2>

          <p className="save-date-note">
            A beautiful day awaits
          </p>
        </div>

        {!revealed && (
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            aria-label="Scratch to reveal the wedding date"
            onPointerDown={(event) => {
              scratching.current = true;
              event.currentTarget.setPointerCapture(
                event.pointerId
              );
              scratch(event);
            }}
            onPointerMove={(event) => {
              if (scratching.current) {
                scratch(event);
              }
            }}
            onPointerUp={() => {
              scratching.current = false;
            }}
            onPointerCancel={() => {
              scratching.current = false;
            }}
          />
        )}
      </div>

      <p className="scratch-hint">
        {revealed
          ? "A date to remember ♡"
          : "Scratch to uncover the date"}
      </p>

      {/* Content shown after scratching */}
      {revealed && (
        <>
          <div
            className="confetti-burst"
            aria-hidden="true"
          >
            {Array.from({ length: 36 }, (_, i) => (
              <span
                key={i}
                style={{
                  "--angle": `${i * 10}deg`,
                  "--delay": `${(i % 6) * 0.04}s`,
                }}
              />
            ))}
          </div>

          <div className="countdown-section">
            <p className="countdown-heading">
              COUNTDOWN TO THE BIG DAY
            </p>

            <div className="countdown-grid">
              {[
                ["DAYS", timeLeft?.days],
                ["HOURS", timeLeft?.hours],
                ["MINUTES", timeLeft?.minutes],
                ["SECONDS", timeLeft?.seconds],
              ].map(([label, value]) => (
                <div
                  className="countdown-item"
                  key={label}
                >
                  <span className="countdown-number">
                    {String(value ?? 0).padStart(2, "0")}
                  </span>

                  <span className="countdown-label">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="save-date-closing">
            Until our special day ✧
          </p>
        </>
      )}

      {/* Elegant footer */}
      
<div className="save-date-footer">
  <span className="footer-flourish">♡</span>

  <p className="event-section-title">
    THE WEDDING CEREMONY
  </p>

  <div className="event-detail">
    <h3>Nikah</h3>
    <p className="event-time">10:30 AM</p>
    <span className="event-description">
      The beginning of forever
    </span>
  </div>

  <div className="event-divider">
    <span>♡</span>
  </div>

  <div className="event-detail">
    <h3>Reception</h3>
    <p className="event-time">
      After Nikah – 2:00 PM
    </p>
    <span className="event-description">
      Join us for the celebration
    </span>
  </div>

  <div className="footer-mini-divider">
    <span />
    <span>✧</span>
    <span />
  </div>

  <p className="footer-signoff">
    We look forward to celebrating with you
  </p>
</div>

    </section>
  );
}
