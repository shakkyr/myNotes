import React from 'react'
import Post from './post/Post'
import makeStyles from './styles'

const Posts = () => {
    const classes = makeStyles()
  return (
      <>
    <h1>Posts</h1>
    <Post/>
    <Post/>

      </>
  )
}

export default Posts