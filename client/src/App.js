import React, {useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import {useDispatch} from "react-redux"

import { getPosts } from './actions/posts'
import notes from './images/notes.png'
import Form from './components/form/Form'
import Posts from './components/posts/Posts'
import makeStyles from './styles'

const App = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getPosts())
  },[dispatch])

  return (
    <Container >
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Notes
        </Typography>
        <img className={classes.image} src={notes} alt="notes" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>

      </Grow>
    </Container>
  )
}

export default App