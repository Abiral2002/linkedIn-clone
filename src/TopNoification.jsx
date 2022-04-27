import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

function TopNoification(props) {

  return (
    <div style={{background:props.color}} className='top_notification'>
        <p>{props.message}</p>
        <div onClick={(e)=>document.querySelector(".top_notification").style.height="0px"}>
            <CloseIcon sx={{width:"20px",height:"20px"}} className='notification_icon'/>
        </div>
    </div>
  )
}

export default TopNoification