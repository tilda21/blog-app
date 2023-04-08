/* eslint-disable no-undef */
import axios from 'axios';
import env from 'react-dotenv';

console.log('process.env: ', env);
const API_ENDPOINT = env.SERVER_ENDPOINT;
// const API_ENDPOINT = 'http://localhost:8080';

export const fetchPosts = async () => {
  return await axios.get(`${API_ENDPOINT}/posts`);
};

export const fetchSinglePost = async id => {
  return await axios.get(`${API_ENDPOINT}/posts/${id}`);
};

export const createPost = async post => {
  return await axios.post(`${API_ENDPOINT}/posts`, post);
};

export const updatePost = async (id, updatedPost) => {
  return await axios.patch(`${API_ENDPOINT}/posts/${id}`, updatedPost);
};

export const deletePost = async id => {
  return await axios.delete(`${API_ENDPOINT}/posts/${id}`);
};
