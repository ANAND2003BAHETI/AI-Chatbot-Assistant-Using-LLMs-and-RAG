
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        message: message,
      });

      setChat([
        ...chat,
        {
          user: message,
          ai: res.data.ai_response,
        },
      ]);

      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Chatbot Assistant</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          style={{ padding: "10px", width: "300px" }}
        />

        <button
          onClick={sendMessage}
          style={{ padding: "10px", marginLeft: "10px" }}
        >
          Send
        </button>
      </div>

      {chat.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><strong>You:</strong> {item.user}</p>
          <p><strong>AI:</strong> {item.ai}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
