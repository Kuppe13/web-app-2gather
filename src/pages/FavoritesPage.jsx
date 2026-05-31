import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import "../HomePage.css";

const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function FavoritesPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="app">
        <section className="feed-intro">
          <h2 className="page-title">Dine gemte events</h2>
        </section>

        <section className="post-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}

console.log("VITE_SUPABASE_URL:", URL);
console.log("VITE_SUPABASE_APIKEY:", APIKEY);
