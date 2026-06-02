// CHAT BOBLER IKONER I NAVBAR
import { useState } from "react";
import personOneImg from "../images/person1.avif";
import personTwoImg from "../images/person2.avif";
import personThreeImg from "../images/person3.avif";
import annaImg from "../images/anna.avif";
import "../chat.css";

const chats = [
  {
    id: 1,
    name: "Anna L.",
    message: "Glæder mig til at ses!",
    time: "20 min",
    avatar: annaImg,
  },
  {
    id: 2,
    name: "Lisa B.",
    message: "Hvad siger du til det?",
    time: "30 min",
    avatar: personOneImg,
  },
  {
    id: 3,
    name: "Martin O.",
    message: "Oh nice! Vil gerne med!",
    time: "1 t",
    avatar: personThreeImg,
  },
  {
    id: 4,
    name: "Celina L.",
    message: "Det lyder sjovt, jeg er på!",
    time: "2 t",
    avatar: personOneImg,
  },
  {
    id: 5,
    name: "Line F.",
    message: "Hej, jeg er interesseret i at deltage!",
    time: "3 t",
    avatar: personTwoImg,
  },
  {
    id: 6,
    name: "Kübra F.",
    message: "Jeg er lige flyttet til Aarhus og vil gerne møde nye mennesker!",
    time: "10 t",
    avatar: annaImg,
  },
];

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState("messages");

  return (
    <main className="app chat-page">
      <section className="page-header">
        <h1 className="page-title">Chat</h1>
      </section>
      <section className="chat-shell">
        <header className="chat-topbar">
          <button
            className={
              activeTab === "messages" ? "chat-tab is-active" : "chat-tab"
            }
            onClick={() => setActiveTab("messages")}
            type="button"
          >
            Beskeder
          </button>
          <button
            className={
              activeTab === "requests" ? "chat-tab is-active" : "chat-tab"
            }
            onClick={() => setActiveTab("requests")}
            type="button"
          >
            Anmodninger
          </button>
        </header>

        {activeTab === "messages" ? (
          <div className="chat-list" role="list">
            {chats.map((chat) => (
              <article key={chat.id} className="chat-row" role="listitem">
                <div className="chat-avatar-wrap">
                  {chat.avatar ? (
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="chat-avatar"
                    />
                  ) : (
                    <div
                      className="chat-avatar chat-avatar--placeholder"
                      aria-hidden="true"
                    >
                      <span />
                    </div>
                  )}
                </div>

                <div className="chat-copy">
                  <h2 className="chat-name">{chat.name}</h2>
                  <p className="chat-preview">{chat.message}</p>
                </div>

                <time className="chat-time" dateTime="PT3H">
                  {chat.time}
                </time>
              </article>
            ))}
          </div>
        ) : (
          <div className="chat-requests">
            <p>Ingen anmodninger endnu.</p>
          </div>
        )}
      </section>
    </main>
  );
}
