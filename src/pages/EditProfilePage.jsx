import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [name, setName] = useState(
    localStorage.getItem("profileName") || "Kübra",
  );
  const [username, setUsername] = useState(
    localStorage.getItem("profileUsername") || "@kubrafidan",
  );
  const [about, setAbout] = useState(
    localStorage.getItem("profileAbout") ||
      "Jeg er lige flyttet til Aarhus og vil ud og opleve byen og måske møde nye mennesker med samme interesser!",
  );

  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileUsername", username);
    localStorage.setItem("profileAbout", about);
    navigate("/profile/1");
  }

  return (
    <main className="app">
      <h1 className="page-title">Rediger profil</h1>

      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Navn</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="username">Brugernavn</label>
          <input
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="about">Om mig</label>
          <textarea
            id="about"
            name="about"
            rows="4"
            value={about}
            onChange={(event) => setAbout(event.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Gem ændringer
          </button>
        </div>
      </form>
    </main>
  );
}
