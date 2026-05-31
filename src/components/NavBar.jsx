import { NavLink } from "react-router-dom";
import homeIcon from "../icons/home-icon.svg";
import heartIcon1 from "../icons/heart-icon1.svg";
import plusIcon from "../icons/plus-icon.svg";
import chatIcon from "../icons/chat-icon.svg";
import profileIcon from "../icons/profile-icon.svg";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <img src={homeIcon} alt="Home icon" />
      </NavLink>
      <NavLink to="/favorites">
        <img src={heartIcon1} alt="Heart icon" />
      </NavLink>
      <NavLink to="/createPost">
        <img src={plusIcon} alt="Plus icon" />
      </NavLink>
      <NavLink to="/chat">
        <img src={chatIcon} alt="Chat icon" />
      </NavLink>
      <NavLink to="/profile">
        <img src={profileIcon} alt="Profile icon" />
      </NavLink>
    </nav>
  );
}
