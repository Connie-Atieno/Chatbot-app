import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    const botMessage = {
      sender: 'bot',
      text: getBotResponse(input)
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const getBotResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) return 'Hello! How can I help you today?';
    if (text.includes('price')) return 'Prices vary depending on the product. Can you be more specific?';
    if (text.includes('thank')) return 'You’re welcome!';
    return 'Sorry, I didn’t understand that. Can you rephrase?';
  };

  return (
    <div className="chat-container">
  <div className="chat-header">MentorBot 💬</div>
  
  <div className="chat-messages">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
      >
        {msg.text}
      </div>
    ))}
  </div>

  <div className="chat-input">
    <input
      type="text"
      value={input}
      onChange={handleInputChange}
      placeholder="Ask me anything..."
    />
    <button onClick={handleSend}>Send</button>
  </div>
</div>

  );
}

export default App;
