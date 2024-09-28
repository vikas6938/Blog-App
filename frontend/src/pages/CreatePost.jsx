import React from 'react';
import { createPost } from '../api';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleCreatePost = async (postData) => {
    await createPost(postData);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h1 className="text-center mb-4">Create New Post</h1>
          <div className="card shadow p-4">
            <PostForm onSubmit={handleCreatePost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
