import { useEffect, useState } from "react";

const WEDDING_DATE = "2027-01-01T10:00:00";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference =
        new Date(WEDDING_DATE).getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <p className="section-eyebrow">
        THE COUNTDOWN
      </p>

      <h2 className="section-heading">
        Until our forever begins
      </h2>

      {timeLeft ? (
        <div className="countdown-grid">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div className="countdown-item" key={label}>
              <span className="countdown-number">
                {String(value).padStart(2, "0")}
              </span>

              <span className="countdown-label">
                {label}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="countdown-complete">
          The beginning of forever.
        </p>
      )}
    </section>
  );
}