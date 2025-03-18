import { Button, Grid, Card, CardContent, Typography, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost, editPost, deletePost } from "./axios"; // Import API functions
// Define Post Type
interface Post {
  _id?: string | any;
  title: string;
  content: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/posts");
        setPosts(response.data); // Store data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Runs once on component mount
console.log('posts',posts)


  // Create a new post
  const handleCreatePost = async () => {
    try {
      const newPost = await createPost({ title: "New Post", content: "This is a new post." });
      setPosts((prev) => [...prev, newPost]); // Update UI with new post
    } catch (error) {
      console.error("Failed to create post.", error);
    }
  };
  
  // Edit a post
  const handleEditPost = async (postId: string) => {
    try {
      const updatedPost: Post = await editPost(postId, {
        title: "Updated Post",
        content: "This post has been updated."
      });
  
      setPosts((prev) =>
        prev.map((p) => (p._id === postId ? { ...p, ...updatedPost } : p)) 
      );
    } catch (error) {
      console.error("Failed to edit post.", error);
    }
  };
  

  // Delete a post
  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      setPosts((prev) => prev.filter((p) => p._id !== postId)); // Remove from UI
    } catch (error) {
      console.error("Failed to delete post.");
    }
  };
  //component did mount
  useEffect(()=>{

  },[])
  //compnent did update
  useEffect(()=>{

  },[posts])
  //component will unmount
  useEffect(()=>{ 
    return()=>{
      console.log('component will unmount')
    }
  },[])
  return (
    <>
      <Grid fontWeight={"bold"} mb={1}>
        Hello, let's start
      </Grid>

      <Grid fontWeight={"bold"} mb={1}>
        <Button variant="contained" onClick={() => navigate("/counter")}>
          Navigate to Counter
        </Button>
      </Grid>
      <Button variant="contained" onClick={() => navigate("/counterRecoil")}>
        Navigate to Counter Recoil
      </Button>

      {/* Display Posts */}
      <Grid container spacing={2} mt={2}>
        {posts.length > 0 ? (
         posts && posts?.map((post:any) => (
            <Grid item xs={12} sm={6} md={6} key={post._id}>
              <Stack display={"flex"} direction={'column'}><Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.content}
                  </Typography></Stack>
                  
             
            </Grid>
          ))
        ) : (
          <Typography variant="h6" mt={2}>
            No posts available
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default Home;
