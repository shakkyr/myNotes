import React from 'react'
import { useSelector } from 'react-redux'
import Post from './post/Post'
import makeStyles from './styles'

const Posts = () => {
    const posts = useSelector((state)=> state.posts)
    const classes = makeStyles()

    console.log(posts);
  return (
      <>
    <h1>Posts</h1>
    <Post/>
    <Post/>

      </>
  )
}

export default Posts