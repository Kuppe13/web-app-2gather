import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import heartIcon from "../icons/heart-icon.svg";
import shareIcon from "../icons/share-icon.svg";
import calendarIcon from "../icons/uit_calender.svg";
import locationIcon from "../icons/carbon_location.svg";
import twoPeopleIcon from "../icons/twoPeople-icon.svg";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getPost() {
      const response = await fetch(`${URL}?id=eq.${id}`, { headers });
      const data = await response.json();
      setPost(data[0]);
    }

    getPost();
  }, [id]);

  async function handleDelete() {
    const confirmed = window.confirm("Delete this post?");

    if (!confirmed) return;

    await fetch(`${URL}?id=eq.${id}`, { method: "DELETE", headers });
    navigate("/");
  }

  return (
    <main className="app">
      <article className="post-detail">
        <div className="image-wrapper">
          <img src={post.image} alt={post.title} />
          <div className="top-icons">
            <button className="icon-btn">
              <img src={heartIcon} alt="favorite" />
            </button>
            <button className="icon-btn">
              <img src={shareIcon} alt="share" className="share-icon" />
            </button>
          </div>
        </div>
        <div className="post-detail-body">
          <h1 className="post-detail-title">{post.title}</h1>
          <p className="post-date">{post.date}</p>
          <p className="post-location">{post.location}</p>
          <h3 className="section-title">Om eventet</h3>
          <p className="event-description">
            Kom til en hyggelig dag, hvor vi maler keramik efter egen lyst. Der
            vil blive serveret snacks og sodavand.
          </p>
          <h3 className="section-title">Arrangør</h3>
          <div className="organizer">
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="Anna"
              className="organizer-avatar"
            />
            <p className="organizer-name">Anna L.</p>
            <p className="organizer-rating">⭐ 4.8 (12 events)</p>
          </div>
          <h3 className="section-title">Deltagere (22)</h3>
          <div className="participants">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt=""
              className="participant-avatar"
            />
            <img
              src="https://i.pravatar.cc/100?img=15"
              alt=""
              className="participant-avatar"
            />
            <img
              src="https://i.pravatar.cc/100?img=18"
              alt=""
              className="participant-avatar"
            />
            <div className="participant-count">+19</div>
          </div>
          <button className="join-btn">Deltag</button>
        </div>
      </article>
    </main>
  );
}
