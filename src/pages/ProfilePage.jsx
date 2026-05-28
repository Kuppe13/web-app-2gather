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
    </div>
  );
}
