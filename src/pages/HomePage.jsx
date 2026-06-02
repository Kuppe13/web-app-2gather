// HUS IKON I NAVBAR

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import "../HomePage.css";

const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

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

  // build category options from posts
  const uniqueCategories = Array.from(
    new Set(posts.map((p) => p.category).filter(Boolean)),
  );
  const categoryOptions = [
    { key: "all", label: "Alle" },
    ...uniqueCategories.map((c) => ({ key: c, label: c })),
  ];

  const visiblePosts =
    !activeFilter || activeFilter === "all"
      ? posts
      : posts.filter((p) => p.category === activeFilter);

  console.log(
    "HomePage categories:",
    categoryOptions,
    "activeFilter:",
    activeFilter,
    "posts:",
    posts.length,
  );

  return (
    <>
      <Header />
      <main className="app">
        <section className="feed-intro">
          <h2 className="page-title">Hej Kübra!</h2>
          <p className="front-page-text">Velkommen tilbage!</p>
          <p className="feed-section-one">Udforsk events i nærheden af dig!</p>
        </section>

        <FilterBar
          options={categoryOptions}
          active={activeFilter}
          onSelect={setActiveFilter}
        />

        <section className="post-grid">
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}

console.log("VITE_SUPABASE_URL:", URL);
console.log("VITE_SUPABASE_APIKEY:", APIKEY);
