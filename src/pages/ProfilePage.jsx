// PERSON IKON I NAVBAR
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import profileImage from "../images/pb.avif";
import "../profile.css";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulerer hentning af brugerdata
    setTimeout(() => {
      setUser({
        name: localStorage.getItem("profileName") || "Kübra Fidan",
        brugernavn: localStorage.getItem("profileUsername") || "kubrafidan",
        lokation: "Aarhus V",
        Beskrivelse:
          localStorage.getItem("profileAbout") ||
          "Jeg elsker at gå til koncerter og festivaler! Jeg er altid på udkig efter nye musikoplevelser og elsker at dele mine oplevelser med andre.",
      });
    }, 1000);
  }, []);

  return (
    <>
      <main className="app">
        <h1 className="page-title profile-page-title">Profil</h1>
        {user ? (
          <>
            <div className="profile-container">
              <div className="profile-left">
                <img
                  src={profileImage}
                  alt="profile"
                  className="profile-icon"
                />

                <p className="username">@{user.brugernavn.replace(/^@/, "")}</p>

                <h2>{user.name}</h2>

                <p className="location">{user.lokation}</p>
              </div>

              <div className="profile-right">
                <div className="stat">
                  <h3>35</h3>
                  <p>Venner</p>
                </div>

                <div className="stat">
                  <h3>7</h3>
                  <p>Begivenheder</p>
                </div>

                <div className="stat">
                  <h3>6</h3>
                  <p>Gemte events</p>
                </div>

                <Link to="/profile/edit" className="edit-btn">
                  Rediger
                </Link>
              </div>
            </div>

            <div className="profile-description">
              <p>
                <strong>Om mig:</strong> {user.Beskrivelse}
              </p>
            </div>
          </>
        ) : (
          <p>Henter profiloplysninger...</p>
        )}
      </main>
      <NavBar />
    </>
  );
}
