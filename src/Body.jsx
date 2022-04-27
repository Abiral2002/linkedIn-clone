import React from 'react'
import Feed from './Feed'
import SideBar from './SideBar'

function Body() {
  return (
    <div className='app_body'>
      <SideBar/>
      <Feed/>
    </div>
  )
}

export default Body