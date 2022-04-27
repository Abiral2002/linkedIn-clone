import React, { useEffect, useState } from 'react'
import AddPost from './AddPost'
import { db ,auth} from './firebase'
import Post from './Post'
import { collection, getDocs } from 'firebase/firestore';

function Feed() {

  const [posts,setPosts]=useState([])
  const postsCollection=collection(db,"posts")

  useEffect(()=>{
    const docs=getDocs(postsCollection)
    docs.then(data=>{
      setPosts(data.docs.map(item => ({id:item.id,data:item.data()})))
    })
  })

  return (
    <div className='feed_bar'>
        <AddPost collections={postsCollection}/>
        {posts.map(data=>{
          return <Post key={data.id} username={data.data.name} timestamp={Date(data.data.timestamp)} content={data.data.message}/>
        })}
    </div>
  )
}

export default Feed