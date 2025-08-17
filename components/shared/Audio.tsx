"use client";
import { useEffect, useRef, useState } from "react";
import { AudioLines } from "@/components/ui/AudioLines";

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [animate, setAnimate] = useState(true);
  const songTitle = "Anthem UNAS FEST";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.muted = true;

    audio
      .play()
      .then(() => {
        startCountdown(() => {
          audio.muted = false;
          fadeInVolume(audio, 0.1, 2000);
        });
      })
      .catch(() => {
        console.log("Autoplay diblokir, menunggu interaksi...");
        const handleUserInteract = () => {
          audio
            .play()
            .then(() => {
              startCountdown(() => {
                audio.muted = false;
                fadeInVolume(audio, 0.1, 2000);
              });
              removeListeners();
            })
            .catch((err) => {
              console.log("Gagal memutar audio, coba lagi...", err);
            });
        };

        const removeListeners = () => {
          document.removeEventListener("click", handleUserInteract);
          document.removeEventListener("touchstart", handleUserInteract);
          document.removeEventListener("scroll", handleUserInteract);
        };

        document.addEventListener("click", handleUserInteract);
        document.addEventListener("touchstart", handleUserInteract);
        document.addEventListener("scroll", handleUserInteract);
      });
  }, []);

  const fadeInVolume = (
    audio: HTMLAudioElement,
    target: number,
    duration: number
  ) => {
    let step = (target - audio.volume) / (duration / 50);
    const fadeInterval = setInterval(() => {
      if (audio.volume + step >= target) {
        audio.volume = target;
        clearInterval(fadeInterval);
      } else {
        audio.volume = Math.min(target, audio.volume + step);
      }
    }, 50);
  };

  const startCountdown = (onFinish: () => void) => {
    setShowCountdown(true);
    let timeLeft = 5;
    setCountdown(timeLeft);
    setAnimate(true);

    const timer = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft > 0) {
        setCountdown(timeLeft);
        setAnimate(false);
        setTimeout(() => setAnimate(true), 10);
      } else {
        clearInterval(timer);
        setShowCountdown(false);
        onFinish();
      }
    }, 1000);
  };

  return (
    <>
      <audio ref={audioRef} src="/ANTHEM_UNASFEST.mp3" loop preload="auto" />

      {showCountdown && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "rgba(0,0,0,0.85)",
            color: "white",
            padding: "16px 20px",
            borderRadius: "8px",
            textAlign: "center",
            fontFamily: "sans-serif",
            zIndex: 9999,
            minWidth: "180px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              fontSize: "14px",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <AudioLines />
            {songTitle}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "14px", marginRight: "8px" }}>
              The music will start in
            </span>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                transition: "transform 0.5s ease, opacity 0.5s ease",
                transform: animate ? "scale(1.3)" : "scale(1)",
                opacity: animate ? 1 : 0.5,
              }}
            >
              {countdown}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
