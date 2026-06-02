import { Link } from "react-router-dom";
import heartIcon1 from "../icons/heart-icon1.svg";

export default function PostCard({ post }) {
  const locationParts = (post.location || "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  const streetLine = locationParts[0] || post.location || "";
  const cityLine = locationParts.slice(1).join(", ");

  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <img src={post.image} alt={post.caption} />
      <div className="post-card-body">
        <div className="post-card-header">
          <button className="like-btn">
            <img src={heartIcon1} alt="favorite" />
          </button>
        </div>
        <div className="post-card-title">
          <div id={post.title}></div>
        </div>

        <h2>{post.title}</h2>
        <p className="post-card-date">{post.date}</p>
        <p className="post-card-time">{post.time}</p>
        <p className="post-card-location">
          <span className="post-card-location-line">{streetLine}</span>
          {cityLine ? (
            <span className="post-card-location-line">{cityLine}</span>
          ) : null}
        </p>
      </div>
    </Link>
  );
}
