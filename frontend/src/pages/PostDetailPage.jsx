import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostById, deletePost } from '../api';  // Import deletePost API
import { Spinner } from 'react-bootstrap';

const PostDetailPage = () => {
  const { id } = useParams();  // Extract post ID from the URL
  const [post, setPost] = useState(null);  // To store post data
  const [loading, setLoading] = useState(true);  // To manage loading state
  const [error, setError] = useState(null);  // To handle errors
  const navigate = useNavigate();  // Navigation

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetchPostById(id);  // Fetch the post by ID
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch post.');
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);  // Delete the post
    navigate('/');  // Navigate back to the homepage after deleting
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

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mt-5 post-detail-page">
      {post ? (
        <div className="card shadow p-4">
          <h1 className="card-title">{post.title}</h1>
          <p className="card-text">{post.content}</p>
          <div className="text-muted">
            Posted on: {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="mt-4 d-flex justify-content-between me">
            <button className="btn btn-danger me-2" onClick={handleDelete}>
              Delete Post
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate(`/edit/${post._id}`)}
            >
              Edit Post
            </button>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center">Post not found</div>
      )}
    </div>
  );
};

export default PostDetailPage;
