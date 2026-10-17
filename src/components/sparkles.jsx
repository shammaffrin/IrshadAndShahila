
import { useEffect, useState } from "react";
import "./Sparkles.css";

export default function Sparkles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 2 + Math.random() * 5,
      size: 2 + Math.random() * 4,
    }));

    setParticles(items);
  }, []);

  return (
    <div className="sparkles-layer" aria-hidden="true">
      {particles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
        />
      ))}
    </div>
  );
}
