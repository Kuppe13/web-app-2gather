import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/create" className="nav-link">
          Create Post
        </NavLink>
        <NavLink to="/profile/1" className="nav-link">
          Profile
        </NavLink>
      </nav>
    </header>
  );
}
