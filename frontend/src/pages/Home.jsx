import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';  // Import PostList component
import { fetchPosts } from '../api'; // Assume an API function to fetch posts

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts(); // Fetch posts from API
        setPosts(response.data); // Set the posts in state
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className='container mt-5'>
      <h1 className='mb-5'>Blog Posts</h1>
      <PostList posts={posts} />  
    </div>
  );
};

export default HomePage;
