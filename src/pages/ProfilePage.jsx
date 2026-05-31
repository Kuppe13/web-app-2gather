// PERSON IKON I NAVBAR
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulerer hentning af brugerdata
    setTimeout(() => {
      setUser({
        name: "Navn Efternavn",
        email: "navn@example.com",
      });
    }, 1000);
  }, []);

  return (
    <>
      <main className="app">
        <h1 className="page-title">Profil</h1>
        {user ? (
          <div className="profile-container">
            <p>
              <strong>Navn:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ) : (
          <p>Henter brugerdata...</p>
        )}
      </main>
      <NavBar />
    </>
  );
}
