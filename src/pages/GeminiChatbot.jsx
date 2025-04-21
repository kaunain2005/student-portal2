import React, { useState } from 'react';
import axios from 'axios';

const GeminiChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/chat', {
        message: input,
      });

      const botMessage = {
        role: 'model',
        text: res.data.reply,
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'model', text: 'Something went wrong on the server.' },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto pt-15">
      <h2 className="text-2xl font-bold mb-4">Wisdom Academy Chatbot</h2>
      <div className="h-80 overflow-y-auto border p-2 rounded mb-4 bg-gray-100">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-200' : 'bg-gray-300'}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="italic text-gray-400">Gemini is typing...</p>}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border p-2 rounded"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default GeminiChatbot;
