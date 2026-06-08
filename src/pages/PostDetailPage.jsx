import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteAnimation from "../components/DeleteAnimation";

import "./PostDetailPage.css";

import heartIcon from "../icons/heart-icon.svg";
import shareIcon from "../icons/share-icon.svg";
import calendarIcon from "../icons/uit_calender.svg";
import locationIcon from "../icons/carbon_location.svg";
import starIcon from "../icons/star-icon.svg";
import peopleIcon from "../icons/peopleIcon.svg";
import annaImg from "../images/anna.avif";
import personOneImg from "../images/person1.avif";
import personTwoImg from "../images/person2.avif";
import personThreeImg from "../images/person3.avif";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [showDeleteAnimation, setShowDeleteAnimation] = useState(false);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(`${URL}?id=eq.${id}`, { headers });
      const data = await response.json();
      setPost(data[0]);
    }

    getPost();
  }, [id]);

  if (showDeleteAnimation) {
    return <DeleteAnimation />;
  }

  async function handleDelete() {
    const confirmed = window.confirm("Delete this post?");

    if (!confirmed) return;

    await fetch(`${URL}?id=eq.${id}`, {
      method: "DELETE",
      headers,
    });

    setShowDeleteAnimation(true);
  }

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("da-DK", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

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
          <div className="post-date-row">
            <img src={calendarIcon} alt="calendar" className="detail-icon" />

            <p className="post-date">
              {formattedDate} • {post.time?.slice(0, 5)}
            </p>
          </div>

          <div className="post-location-row">
            <img src={locationIcon} alt="location" className="detail-icon" />

            <p className="post-location">{post.location}</p>
          </div>
          <h3 className="section-title">Om eventet</h3>
          <p className="description">{post.description}</p>
          <h3 className="section-title">Arrangør</h3>

          <div className="organizer">
            <img src={annaImg} alt="Anna" className="organizer-avatar" />

            <div className="organizer-info">
              <p className="organizer_name">{post.organizer_name}</p>

              <div className="organizer-rating">
                <img src={starIcon} alt="rating" className="rating-icon" />

                <p>4.8 (12 events)</p>
              </div>
            </div>
          </div>

          <h3 className="section-title participants-title">Deltagere (22)</h3>

          <div className="participants">
            <img src={personOneImg} className="participant-avatar" />
            <img src={personTwoImg} className="participant-avatar" />
            <img src={personThreeImg} className="participant-avatar" />

            <div className="participant-count">
              <span>+19</span>
            </div>
          </div>

          <div className="solo-box">
            <h4>12 deltager alene</h4>
            <div className="solo-text-row">
              <p>Perfekt mulighed for at møde nye mennesker!</p>
              <img src={peopleIcon} alt="People icon" className="solo-icon" />
            </div>
          </div>

          <div className="action-buttons">
            <button className="join-btn">Deltag</button>
            <button
              className="edit-btn"
              onClick={() => navigate(`/posts/${id}/edit`)}
            >
              Rediger
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Slet
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
