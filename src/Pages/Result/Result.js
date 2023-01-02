import React ,{useEffect,useState} from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
function Result() {
  const classes=useStyles();
  const [post,setPost]=useState(null)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>response.json())
    .then(response=>{
      const {body}=response
      setPost(body)
    })
  },[])
  return (
    <div className="App">
      <h1 align="center">React-App</h1> 
      {post?post :<Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>}
      
    </div>
  );
}

export default Result;