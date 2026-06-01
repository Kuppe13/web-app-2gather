import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function EditDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("eventTitle", title);
    localStorage.setItem("eventDescription", description);
    localStorage.setItem("eventDate", date);
    localStorage.setItem("eventLocation", location);

    await fetch(`${URL}?id=eq.${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ title, description, date, location }),
    });

    navigate(`/posts/${id}`);
  }

  return (
    <main className="app">
      <h1 className="page-title">Rediger event</h1>

      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Titel</label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Beskrivelse</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="date">Dato</label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="location">Lokation</label>
          <input
            id="location"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="organizer">Arrangør</label>
          <input
            id="organizer"
            name="organizer"
            value={localStorage.getItem("profileName") || ""}
            onChange={(event) =>
              localStorage.setItem("profileName", event.target.value)
            }
          />
        </div>

        <button type="submit" className="save-btn">
          Gem ændringer
        </button>
      </form>
    </main>
  );
}
