import { Link } from "react-router-dom";
import "./ProfilePage.css";

export default function ProfilePage() {
  const name = localStorage.getItem("profileName") || "Kübra";
  const username = localStorage.getItem("profileUsername") || "@kubrafidan";
  const about = localStorage.getItem("profileAbout") || "Jeg er lige flyttet til Aarhus og vil ud og opleve byen og måske møde nye mennesker med samme interesser!";

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-left">
            <img
              className="profile-image"
              src="https://via.placeholder.com/120"
              alt="profile"
            />

            <div className="profile-info">
              <h2>{name}</h2>
              <p>{username}</p>
            </div>
          </div>

          <div className="profile-stats">
            <div>
              <h3>35</h3>
              <p>Venner</p>
            </div>

            <div>
              <h3>7</h3>
              <p>Begivenheder</p>
            </div>

            <div>
              <h3>6</h3>
              <p>Gemte events</p>
            </div>

            <Link to="/profile/1/edit" className="btn-link">
              <button>Rediger</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="about-card">
        <h3>Om mig:</h3>

        <p>{about}</p>
      </div>
    </div>
  );
}
