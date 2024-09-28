import React from 'react';
import { Link } from 'react-router-dom';


const PostList = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-12 mb-4" key={post._id}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content.substring(0, 100)}...</p>
              <Link to={`/post/${post._id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
