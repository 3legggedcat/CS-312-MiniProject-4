
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
//used to get posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
        setPosts(response.data);
        //if error
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);
//when deleteing
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
      //if error
    } catch (error) {
      alert('Failed to delete post');
    }
  };
//layout of page
  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;

