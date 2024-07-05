import React, { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'
const Chat = () => {
      const [open, setOpen] = useState(false)
      return (
            <div className='chat'>
                  <div className="top">
                        <div className="user">
                              <img src="" alt="avatar" />
                              <div className="text">
                                    <span>jane doe</span>
                                    <p>Lorem ipsum dolor sit amea .</p>
                              </div>
                        </div>
                        <div className="icons">
                              <img src="" alt="phone" />
                              <img src="" alt="video" />
                              <img src="" alt="info" />

                        </div>
                  </div>
                  <div className="center"></div>
                  <div className="bottom"><div className="icons">
                        <img src="" alt="phone" />
                        <img src="" alt="video" />
                        <img src="" alt="info" />

                  </div>
                        <input type="text" name="" id="" placeholder='type a message' />
                        <div className="emoji">
                              <img src="" alt="emoji" onClick={() => setOpen(prev => !prev)} />
                              <EmojiPicker open={open} />
                        </div>
                        <button className='sendBtn'>send</button>
                  </div>
            </div>
      )
}

export default Chat
