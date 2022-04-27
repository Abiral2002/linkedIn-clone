import React, { useState } from 'react'
import { Avatar } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { addDoc,Timestamp} from 'firebase/firestore';
import TopNoification from './TopNoification';

function AddPost(props) {

    const [inputValue,setInput]=useState("")
    const [err,setError]=useState(false)
    const addPostIcon=({icon,title})=>{
        return(
            <div className='addpost_icon'>
                {icon}
                <span>{title}</span>
            </div>
        )
    }

    function renderNotification(error){
        return (error)?<TopNoification color="red" message="Error Occured"/>:<TopNoification color="green" message="Solved"/>
    }

    const sendPost=async (e)=>{
        if (e.keyCode===13){
            e.preventDefault()
            try{
                let data=addDoc(
                    props.collections,{
                        name:"Abiral lamsal",
                        description:"this is a test",
                        message:inputValue,
                        timeStamp:Timestamp.fromDate(new Date())
                    })
                setInput("")
                renderNotification(false)
            }
            catch(err){
                renderNotification(true)
            }
        }
      }


  return (
    <div className='add_post'>
        <div className='upper_addpost'>
            <Avatar className='feed_avatar' sx={{width:"45px", height:"45px"}} src='https://media-exp1.licdn.com/dms/image/C5603AQHVDLfhEkC-_w/profile-displayphoto-shrink_100_100/0/1640449087702?e=1656547200&v=beta&t=gTon9Tt-pFLJZuvAtXrsJRb4VzErLA6Ve-mPhGyODwQ'/>
            <input value={inputValue} onKeyDown={sendPost} onChange={(e)=>setInput(e.target.value)} className='addpost_input' placeholder='Start a post' />
        </div>
        <div className='lower_addpost'>
            {addPostIcon({icon:<AddPhotoAlternateIcon style={{color:"green"}}/>,title:"Photo"})}
            {addPostIcon({icon:<YouTubeIcon style={{color:"red"}}/>,title:"Video"})}
            {addPostIcon({icon:<EventIcon style={{color:"#f5ce42"}}/>,title:"Event"})}
            {addPostIcon({icon:<NewspaperIcon style={{color:"#f5429e"}}/>,title:"Article"})}
        </div>
    </div>
  )
}

export default AddPost