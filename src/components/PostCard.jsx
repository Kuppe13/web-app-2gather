import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <img src={post.image} alt={post.caption} />
      <div className="post-card-body">
        <div className="post-card-title">
          <div id={post.title}></div>
        </div>

        <h2>{post.title}</h2>
        <p className="post-card-date">{post.date}</p>
        <p className="post-card-time">{post.time}</p>
        <p className="post-card-location">{post.location}</p>
      </div>
    </Link>
  );
}
