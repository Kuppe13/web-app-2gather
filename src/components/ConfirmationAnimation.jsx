import * as LottiePackage from "lottie-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import confirmationAnimation from "../Confirmation.json";

const Lottie = LottiePackage.default.default;

export default function ConfirmationAnimation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3780);

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
    <div className="confirmation-animation">
      <Lottie animationData={confirmationAnimation} loop={false} />
    </div>
  </div>
);