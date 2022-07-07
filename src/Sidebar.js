import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return(
    <div className="sidebar">
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1657037031161-d126c02cce8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
            <Avatar />
            <h2>sijsjsjsj</h2>
            <h4>sjsh@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
          <div className='sidebar__stat'>
            <p>Who Viewed You</p>
            <p className='sidebar__statNumber'>1,111</p>
          </div>
          <div className='sidebar__stat'>
            <p>Views On Post</p>
            <p className='sidebar__statNumber'>1,200</p>
          </div>
        </div>
        <div className='sidebar__bottom'>
          <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar;