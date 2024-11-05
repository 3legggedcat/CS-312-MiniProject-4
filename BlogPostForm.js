//import the reaact
import React, { useState } from 'react';
//importing axios for handling HTTP requests
import axios from 'axios';

const BlogPostForm = () => 
  {
    //setting up varibles
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [creatorName, setCreatorName] = useState('');
//to handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/posts', { creator_name: creatorName, title, body });
      //if success
      alert('Post created successfully');
      setTitle('');
      setBody('');
      setCreatorName('');
      //if error
    } catch (error) {
      alert('Failed to create post');
    }
  };

  return (
    //the form with iput for styling
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="text"
        placeholder="Creator Name"
        value={creatorName}
        onChange={(e) => setCreatorName(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default BlogPostForm;



