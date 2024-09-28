import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
        </p>
        <Link to={`/post/${post._id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
