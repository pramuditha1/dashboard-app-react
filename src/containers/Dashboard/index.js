import React from 'react'
import { useSelector } from 'react-redux'

/**
* @author
* @function Dashboard
**/

export const Dashboard = (props) => {
    const user = useSelector((state) => state.userInfo)

  return(
    <div>Dashboard</div>
   )

 }