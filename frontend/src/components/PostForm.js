import React, { useState, useEffect } from 'react';

const PostForm = ({ initialData = { title: '', content: '' }, onSubmit }) => {
  const [formData, setFormData] = useState(initialData); // Initialize with initialData

  // useEffect should only run when initialData changes
  useEffect(() => {
    if (initialData && (initialData.title !== formData.title || initialData.content !== formData.content)) {
      setFormData(initialData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,  // Properly update the state
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // Call the parent component's onSubmit handler
  };

  return (
    <div className=''>
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="content">Content</label>
        <textarea
          className="form-control"
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows="5"
        />
      </div>
      <button type="submit" className="btn btn-primary">Save Changes</button>
    </form>
    </div>
  );
};

export default PostForm;
