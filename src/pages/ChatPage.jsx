// CHAT BOBLER IKONER I NAVBAR
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import "../chat.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Simulerer indkommende beskeder
    const interval = setInterval(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: "Ny besked fra en ven!" },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function handleSend() {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  }

  return (
    <>
      <main className="app">
        <h1 className="page-title">Chat</h1>
        <div className="chat-container">
          <div className="messages">
            {messages.map((msg) => (
              <div key={msg.id} className="message">
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv en besked..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </main>
      <NavBar />
    </>
  );
}
