import UserProfileImage from '../assets/profile-1.jpg'
import RobotProfileImage from '../assets/robot.png'


import './ChatMessage.css'
        

export function ChatMessage({message, sender, time}){ 
        return (
          <div className={
            sender === UserProfileImage
              ? "chat-message-user" 
              : "chat-message-robot"
            }>
            {sender === RobotProfileImage && (
              <img src={RobotProfileImage} className="chat-message-profile" alt="" />
            )}
            <div className="chat-message-text">{message}<div className='currenttime'>{ time }</div></div>
            {sender === UserProfileImage && (
              <img src={UserProfileImage} className="chat-message-profile" alt="" />
            )}
          </div>
        )
      }