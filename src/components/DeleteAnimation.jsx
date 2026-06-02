import * as LottiePackage from "lottie-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import deleteAnimation from "../DeleteAnimation.json";

const Lottie = LottiePackage.default.default;

export default function DeleteAnimation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3800); // juster tiden hvis animationen varer længere

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "390px" }}>
        <Lottie animationData={deleteAnimation} loop={false} />
      </div>
    </div>
  );
}
