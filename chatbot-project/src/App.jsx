import { useEffect, useState } from 'react'
import { ChatMessages } from './components/ChatMessages'
import './App.css'
import { ChatInput } from "./components/ChatInput"


function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) ? JSON.parse(localStorage.getItem('messages')) : [])

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  return (
    <div className="app-container">
      {<ChatMessages chatMessages={chatMessages} />}

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
