// PLUS IKON I NAVBAR

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Createpage.css";
import ConfirmationAnimation from "../components/ConfirmationAnimation";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function CreatePage() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        image: image.trim(),
        title: title.trim(),
        date: date.trim(),
        start_time: startTime.trim(),
        end_time: endTime.trim(),
        location: location.trim(),
        organizer_name: organizerName.trim(),
      }),
    });

    console.log("Status:", response.status);
    console.log("Success:", response.ok);
   
    if (response.ok) {
setShowConfirmation(true);
    }
  }

  if (showConfirmation) {
    return <ConfirmationAnimation />;
  }
  return (
    <main className="app create-page">
      <h1 className="page-title">Opret begivenhed</h1>
      <p className="page-subtitle">
        Udfyld informationerne forneden
      </p>
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="image">Event billede</label>
            <input
              id="image"
              name="image"
              placeholder="https://..."
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
            />
            {image && (
              <img src={image} alt="Preview" className="image-preview" />
            )}
          </div>

          <div className="form-field">
            <label htmlFor="title">Titel på event</label>
            <textarea
              id="title"
              name="title"
              rows="4"
              placeholder="Indtast event navn"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="date">Dato</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="startTime">Starttid</label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="endTime">Sluttid</label>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="location">Lokation</label>
            <input
              id="location"
              name="location"
              placeholder="Hvor foregår dit event?"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="organizer">Arrangør</label>
          <input
            id="organizer"
            value={organizerName}
            onChange={(event) => setOrganizerName(event.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="create-btn">
            Opret begivenhed
          </button>
        </div>
      </form>
    </main>
  );
}
