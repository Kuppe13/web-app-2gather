import "./Preloader.css";
import * as LottiePackage from "lottie-react";
import spinningAnimation from "../Spinning-stor.json";

const Lottie = LottiePackage.default.default;

export default function Preloader() {
  return (
    <div className="preloader">
      <div style={{ width: "390px", height: "845px" }}>
        <Lottie animationData={spinningAnimation} loop={true} />
      </div>
    </div>
  );
}
