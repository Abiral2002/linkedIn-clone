import React from 'react'
import { Avatar } from '@mui/material';

function HeaderOption(props) {
  return (
    <div fontSize="medium">
          {props.ICON && <props.ICON fontSize="medium"/>}
          {props.avatar && <Avatar src={props.avatar} alt="" style={{width:"25px",height:"25px"}} /> }
          <span>{props.title}</span>
    </div>
  )
}

export default HeaderOption