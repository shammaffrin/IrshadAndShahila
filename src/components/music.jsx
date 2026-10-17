
import { useEffect, useRef, useState } from "react";
import weddingMusic from "../assets/wedding2.mp3";

export default function MusicPlayer({ shouldPlay = true }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

 useEffect(() => {
  const audio = audioRef.current;
  if (!audio || !shouldPlay) return;

  audio.play().catch(() => {
    const startMusic = () => {
      if (audio.paused) {
        audio.play().catch(console.error);
      }
    };

    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });
  });
}, [shouldPlay]);
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Unable to play music:", error);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMusic}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        type="button"
        className={`music-button ${isPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "♫" : "♪"}
      </button>
    </>
  );
}
