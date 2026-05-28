import "./ProfilePage.css";

function ProfilePage() {
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

            <button>Tilføj</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
