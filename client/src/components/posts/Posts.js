import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './post/Post'
import makeStyles from './styles'

const Posts = () => {
    const posts = useSelector((state)=> state.posts)
    const classes = makeStyles()

    console.log(posts);
  return (
      !posts.length ? <CircularProgress/> :
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map(ele=> (
          <Grid key={ele._id} item xs={12} sm={6}>
            <Post post={ele}/>
          </Grid>
        ))}
      </Grid>
  )
}

export default Posts