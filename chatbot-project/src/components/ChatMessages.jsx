import { useEffect, useRef } from 'react'

import { ChatMessage } from "./ChatMessage"

import './ChatMessages.css'


export function ChatMessages({ chatMessages }) {

  const chatMessagesRef = useRef(null)

  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight
    }
  }, [chatMessages])

 

  if (chatMessages.length === 0) {
    return (
      <div className="welcome-messages-container">
        <div>Welcome to the chatbot Project! Send a message using the chatbot below..</div>
      </div>
    )
  } else {
    return (
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              key={chatMessage.id}
              message={chatMessage.message}
              sender={chatMessage.sender}
              time={chatMessage.time}
            />
          )
        })}
      </div>
    )
  }
}