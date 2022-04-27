import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post(props) {

  const postButton=({Icon,title})=>{
    return(
      <div className='post_icon'>
        {Icon}
        <span>{title}</span>
      </div>
    )
  }
  return (
    <div className="post_container">
        <div className='post_header'>
            <Avatar sx={{width:"35px",height:"35px"}}/>
            <div className='post_name_timestamp'>
              <p>{props.username}</p>
              <span>{props.timestamp}</span>
            </div>
        </div>
        <p className='post_content'>{props.content}</p>

        <div className='post_footer'>
          {postButton({Icon:<ThumbUpOutlinedIcon/>,title:"Like"})}
          {postButton({Icon:<ChatOutlinedIcon/>,title:"Comment"})}
          {postButton({Icon:<ShareOutlinedIcon/>,title:"Share"})}
          {postButton({Icon:<SendOutlinedIcon/>,title:"Send"})}
        </div>
    </div>
  )
}

export default Post