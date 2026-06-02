import "./Preloader.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import spinningAnimation from "../Spinning-stor.json";

export default function Preloader() {
  const navigate = useNavigate();
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const handleComplete = () => {
      console.log("Player complete event fired");
      navigate("/home", { replace: true });
    };

    // try DOM event
    try {
      player.addEventListener("complete", handleComplete);
    } catch (e) {
      // some versions expose onEvent prop only
      console.warn("Could not addEventListener on player", e);
    }

    // fallback timer in case event doesn't fire
    const fallback = setTimeout(() => {
      console.log("Preloader fallback navigation");
      navigate("/home", { replace: true });
    }, 3500);

    return () => {
      try {
        player.removeEventListener("complete", handleComplete);
      } catch (_) {}
      clearTimeout(fallback);
    };
  }, [navigate]);

  return (
    <div className="preloader">
      <div style={{ width: 390, height: 845 }}>
        <Player
          ref={playerRef}
          autoplay
          keepLastFrame
          loop={false}
          src={spinningAnimation}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
