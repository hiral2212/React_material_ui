import React ,{useState}from 'react';
import {Box ,Stack,Skeleton} from "@mui/material";
import Post from "./Post";
const Feed = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}> <>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </></Box> 
   
  )
}

export default Feed;
