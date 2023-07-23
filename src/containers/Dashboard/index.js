import React from 'react'
import { useSelector } from 'react-redux'

/**
* @author
* @function Dashboard
**/

const Dashboard = (props) => {
    const user = useSelector((state) => state.userInfo)

  return(
    <div>Dashboard</div>
   )

 }

 export default Dashboard