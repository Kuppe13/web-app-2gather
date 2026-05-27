import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          Forside
        </NavLink>
        <NavLink to="/create" className="nav-link">
          Opret event
        </NavLink>
      </nav>
    </header>
  );
}
