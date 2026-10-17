import { useEffect } from "react";

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="loading-screen">
      <div className="loading-frame" />

      <div className="loading-content">

        <div className="loading-monogram">
          <span className="monogram-i">I</span>
          <span className="monogram-ampersand">&amp;</span>
          <span className="monogram-s">S</span>
        </div>

        <div className="loading-progress">
          <span />
          <span>◇</span>
          <span />
        </div>
      </div>

    </section>
  );
}