import React, { useEffect, useState } from 'react';
import { fetchPostById, updatePost } from '../api';  // Import API functions
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';  // Reusable form component
import { Spinner } from 'react-bootstrap';

const EditPost = () => {
  const { id } = useParams();  // Get post ID from URL
  const navigate = useNavigate();  // For navigation after update
  const [postData, setPostData] = useState({ title: '', content: '' });  // Form data
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetchPostById(id);
        setPostData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };
    getPost();
  }, [id]);

  const handleUpdatePost = async (updatedPost) => {
    await updatePost(id, updatedPost);  // Update post via API
    navigate(`/post/${id}`);  // Redirect to post detail page
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className='container'>
      
    <div className=" mt-5">
      <h1 className="text-center mb-4">Edit Post</h1>
      
      <div className="card shadow p-4">
        <PostForm initialData={postData} onSubmit={handleUpdatePost} />
      </div>
    </div>
    </div>
  );
};

export default EditPost;
