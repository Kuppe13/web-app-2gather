import "./ProfilePage.css";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-top">
          <img
            className="profile-image"
            src="https://via.placeholder.com/120"
            alt="profile"
          />

          <div className="profile-info">
            <h2>Kübra</h2>
            <p>@kubrafidan</p>

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
            </div>

            <button>Tilføj</button>
          </div>
        </div>
      </div>
      <div className="about-card">
        <h3>Om mig:</h3>

        <p>
          Jeg er lige flyttet til Aarhus og vil ud og opleve byen og måske møde
          nye mennesker med samme interesser!
        </p>
      </div>
    </div>
  );
}
