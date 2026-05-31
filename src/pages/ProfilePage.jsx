// PERSON IKON I NAVBAR
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import profileImage from "../images/pb.avif";
import "../profile.css";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulerer hentning af brugerdata
    setTimeout(() => {
      setUser({
        name: "Kübra Fidan",
        brugernavn: "@kubrafidan",
        lokation: "Aarhus V",
        Beskrivelse:
          "Jeg elsker at gå til koncerter og festivaler! Jeg er altid på udkig efter nye musikoplevelser og elsker at dele mine oplevelser med andre.",
      });
    }, 1000);
  }, []);

  return (
    <>
      <main className="app">
        <h1 className="page-title">Profil</h1>
        {user ? (
          <>
            <div className="profile-container">
              <div className="profile-header">
                <img
                  src={profileImage}
                  alt="profile"
                  className="profile-icon"
                />
              </div>
              <div className="profile-info">
                <p>
                  <strong>Navn:</strong> {user.name}
                </p>
                <p>
                  <strong>Brugernavn:</strong> {user.brugernavn}
                </p>
                <p>
                  <strong>Lokation:</strong> {user.lokation}
                </p>
              </div>
            </div>

            <div className="profile-description">
              <p>
                <strong>Beskrivelse:</strong> {user.Beskrivelse}
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
