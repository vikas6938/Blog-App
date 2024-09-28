import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';  // Ensure the port number is correct

export const fetchPosts = () => axios.get(API_URL);
export const fetchPostById = (id) => axios.get(`${API_URL}/${id}`);
export const createPost = (postData) => axios.post(API_URL, postData);
export const updatePost = (id, postData) => axios.put(`${API_URL}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
