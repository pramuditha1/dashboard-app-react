import { get } from 'lodash'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Chat = (props) => {
  const navigate = useNavigate();
    const userLoginDetails = useSelector((state) => state.userInfo.data)
    const isLoggedIn = get(userLoginDetails, "isLoggedIn")


  return(
    <div>Chat</div>
   )

 }

 export default Chat