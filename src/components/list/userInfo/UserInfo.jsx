import React from 'react'
import './userInfo.css'
import ChatList from '../chatList/ChatList'
const UserInfo = () => {
      return (
            <div className='userInfo'>
                  <div className="user" style={{ display: 'flex' }}>
                        <img src="" alt="user img" height={"40px"} />
                        <h1>john</h1>
                  </div>
                  <div className="icons">
                        <img className="more" src='' alt='more'></img>
                        <img className="video" src='' alt='video'></img>
                        <img className="edit" src='' alt='edit'></img>
                  </div>

            </div>
      )
}

export default UserInfo
