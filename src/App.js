import './App.css';
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {/* Your chat messages will go here */}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
        />
      </div>
    </div>
  );
}

export default App;
