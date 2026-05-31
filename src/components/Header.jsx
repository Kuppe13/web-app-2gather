import { NavLink } from "react-router-dom";
import topBannerLogo from "../icons/top-banner-logo.svg";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="top-banner-logo" aria-label="Top Banner Logo"></nav>
      <NavLink to="/">
        <img src={topBannerLogo} alt="Banner Logo" />
      </NavLink>
    </header>
  );
}
