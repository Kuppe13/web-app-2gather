import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../EditDetailPage.css";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function EditDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [organizer, setOrganizer] = useState(
    localStorage.getItem("profileName") || "",
  );

  useEffect(() => {
    async function getPost() {
      const response = await fetch(`${URL}?id=eq.${id}`, { headers });
      const data = await response.json();

      if (data?.[0]) {
        setImage(data[0].image || "");
        setTitle(data[0].title || "");
        setDescription(data[0].description || "");
        setDate(data[0].date || "");
        setLocation(data[0].location || "");
        setCategory(data[0].category || "");
        setOrganizer(
          data[0].organizer_name || localStorage.getItem("profileName") || "",
        );
      }
    }

    getPost();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("eventTitle", title);
    localStorage.setItem("eventDescription", description);
    localStorage.setItem("eventDate", date);
    localStorage.setItem("eventLocation", location);
    localStorage.setItem("profileName", organizer);

    await fetch(`${URL}?id=eq.${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        image: image.trim(),
        title: title.trim(),
        description: description.trim(),
        date: date.trim(),
        location: location.trim(),
        organizer_name: organizer.trim(),
      }),
    });

    navigate(`/posts/${id}`);
  }

  return (
    <main className="app">
      <h1 className="page-title">Rediger event</h1>

      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="image">Billede URL</label>
          <input
            id="image"
            name="image"
            placeholder="https://..."
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          {image && <img src={image} alt="Preview" className="image-preview" />}
        </div>

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
          <label htmlFor="time">Tid</label>
          <input
            id="time"
            name="time"
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
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
          <label htmlFor="location">Lokation</label>
          <input
            id="location"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Kategori</label>
          <input
            id="category"
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="organizer">Arrangør</label>
          <input
            id="organizer"
            name="organizer"
            value={organizer}
            onChange={(event) => setOrganizer(event.target.value)}
          />
        </div>

        <button type="submit" className="save-btn">
          Gem ændringer
        </button>
      </form>
    </main>
  );
}
