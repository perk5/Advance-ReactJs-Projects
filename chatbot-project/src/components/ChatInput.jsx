import { useState } from 'react'
import SpinningProfileImage from '../assets/loading-spinner.gif'
import { Chatbot } from 'supersimpledev'
import UserProfileImage from '../assets/profile-1.jpg'
import RobotProfileImage from '../assets/robot.png'
import './ChatInput.css'
import dayjs from 'dayjs'

export function ChatInput({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const time = dayjs().valueOf()
  const currentTime = dayjs(time).format('h:mma')


  function saveInputText(event) {
    setInputText(event.target.value)
  }

  async function sendMessage() {

    if (isLoading || inputText === "") {
      return
    }

    setIsLoading(true)

    const newChatMessages = [
      ...chatMessages, {
        message: inputText,
        sender: UserProfileImage,
        time: currentTime,
        id: crypto.randomUUID()
      }, {
        message: <img className="loading-spinner" src={SpinningProfileImage} />,
        sender: RobotProfileImage,
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages)

    setInputText('')

    const response = await Chatbot.getResponseAsync(inputText)

    setChatMessages([
      ...newChatMessages.slice(0, newChatMessages.length - 1), {
        message: response,
        sender: RobotProfileImage,
        time: currentTime,
        id: crypto.randomUUID()
      }
    ])

    setIsLoading(false)
  }

  function clearMessage(){
    setChatMessages([])
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      sendMessage()
    } else if (event.key === "Escape") {
      setInputText('')
    }
  }

  return (
    <div className="chat-input-container">
      <input
        size="30"
        placeholder="Send a message to Chatbot"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={keyPressed}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
      <button
        onClick={clearMessage}
        className="clear-button"
      >Clear</button>
    </div>
  )
}
