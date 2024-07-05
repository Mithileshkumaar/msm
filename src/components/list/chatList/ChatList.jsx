import React, { useState } from 'react'
import './chatList.css'
const ChatList = () => {
      const [addMode, setAddMode] = useState(false)
      return (
            <div className='chatList'>
                  <div className="search">
                        <div className="searchBar">
                              <img src="" alt="search img" />
                              <input type="text" name="" id="" placeholder='search' />
                        </div>
                        <img src="" alt={addMode ? "minus" : "plus"} onClick={() => setAddMode((prev) => !prev)} />
                  </div>
                  <div className="item">
                        <img src="" alt="avt" />
                        <div className="texts">
                              <span>jane</span>
                              <p>hello</p>
                        </div>
                  </div>
                  <div className="item">
                        <img src="" alt="avt" />
                        <div className="texts">
                              <span>jane</span>
                              <p>hello</p>
                        </div>
                  </div> <div className="item">
                        <img src="" alt="avt" />
                        <div className="texts">
                              <span>jane</span>
                              <p>hello</p>
                        </div>
                  </div>
            </div>
      )
}

export default ChatList
