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
      <h1 className="page-title">Post Details</h1>
      <article className="post-detail">
        <img src={post.image} alt={post.title} />
        <div className="post-detail-body">
          <p className="post-meta">Post #{post.id}</p>
          <h1 className="post-detail-title">{post.title}</h1>
          <p className="post-date">{post.date}</p>
          <p className="post-location">{post.location}</p>
          <h3 className="section-title">Om eventet</h3>
          <p className="event-description">
            Kom til en hyggelig dag, hvor vi maler keramik efter egen lyst. Der
            vil blive serveret snacks og sodavand.
          </p>
          <button className="join-btn">Deltag</button>
        </div>
      </article>
    </main>
  );
}
