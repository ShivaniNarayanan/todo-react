import React, { useState } from "react";
import { Search, Star } from "lucide-react";
import "./style.css"; // Import CSS file

const chatData = [
  { name: "Jessica Koel", message: "Hey Joel, I am here to help you.", starred: true },
  { name: "Komeil Bolger", message: "I will send you all documents.", starred: false },
  { name: "Tamaara Suiale", message: "Are you going on a business trip?", starred: false },
  { name: "Sam Nielson", message: "I suggest starting a new business soon.", starred: true },
  { name: "Caroline Nexon", message: "We need to start a new research center.", starred: false },
  { name: "Patrick Koeler", message: "Maybe yes.", starred: false },
];

export default function ChatList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChats = chatData.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-container">
      {/* Search Bar */}
      <div className="search-bar">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Chat List */}
      <ul className="chat-list">
        {filteredChats.map((chat, index) => (
          <li key={index} className="chat-item">
            <div className="chat-info">
              <p className="chat-name">{chat.name}</p>
              <p className="chat-message">{chat.message}</p>
            </div>
            <button className="star-button">
              <Star className={chat.starred ? "star-icon active" : "star-icon"} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
