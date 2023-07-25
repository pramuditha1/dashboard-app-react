import { get } from 'lodash'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Account = (props) => {
  const navigate = useNavigate();
    const userLoginDetails = useSelector((state) => state.userInfo.data)
    const isLoggedIn = get(userLoginDetails, "isLoggedIn")


  return(
    <div>Account</div>
   )

 }

 export default Account