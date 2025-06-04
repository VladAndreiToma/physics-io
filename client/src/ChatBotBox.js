import React, { useState } from "react";
import { ArrowUpTrayIcon, MicrophoneIcon, GlobeAltIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import axios from 'axios';


export default function ChatBotBox() {
  const [manualText, setManualText] = useState('');
  const [userIsTyping, setUserIsTyping] = useState(false);
  const [messages, setMessages] = useState([]); // 🆕 MESSAGES ARRAY

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition. Contact dev team!</span>;
  }

  const handleMicClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      if (transcript.trim() !== '') {
        sendMessage(transcript);
      }
    } else {
      resetTranscript();
      setUserIsTyping(false);
      SpeechRecognition.startListening({ continuous: false, language: 'en-US' });
    }
  };

  const handleInputChange = (e) => {
    setManualText(e.target.value);
    setUserIsTyping(true);
  };

  const handleSend = () => {
    if (manualText.trim() !== '') {
      sendMessage(manualText);
      setManualText('');
      setUserIsTyping(false);
    }
  };

  const sendMessage =  async (text) => {
    setMessages(prev=>[...prev,{sender:"user",text}]);
    try{
      const botResponse = await axios.post('http://localhost:11434/v1/completions',{
        model: 'llama3',
        prompt: text,
        stream: false
      });
      const botReply = botResponse.data.response.trim();
      setMessages(prev=>[...prev, {sender:"bot",text:botReply}]);
    }catch(error){
      console.error("Error in contacting the ai: " , error);
      setMessages(prev=>[...prev, { sender: "bot" , text: "OOPS smth went wrong!!" }]);
    }
  };

  return (
    <div className="chat-bot-box">
      <div className="chat-bot-title">
        dr.Newtonium
      </div>

      {/* BOT POPUP CONTAINER WITH SCROLLABLE MESSAGES */}
      <div className="bot-popup">
        {/* SCROLLABLE MESSAGES AREA */}
          {messages.length === 0 ? (
            <div className="bot-msg">Hello! Ask me anything about the content you're studying.</div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}
              >
                {msg.text}
              </div>
            ))
          )}
      </div>

      {/* INPUT + ACTIONS */}
      <div className="input-holder-actions">
        <input
          type="text"
          value={userIsTyping ? manualText : transcript}
          onChange={handleInputChange}
          className="user-input"
          placeholder="Type your question..."
          onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
        />
        <div className="input-actions">
          <PuzzlePieceIcon className="action-icon" />
          <GlobeAltIcon className="action-icon" />
          <ArrowUpTrayIcon className="action-icon" />
          <MicrophoneIcon
            className={`action-icon cursor-pointer ${listening ? 'text-red-500 animate-pulse' : ''}`}
            style={{ fill: listening ? 'red' : 'whitesmoke' }}
            onClick={handleMicClick}
          />
        </div>
      </div>
    </div>
  );
}
