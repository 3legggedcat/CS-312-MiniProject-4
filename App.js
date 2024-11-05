//importing React to use react features
import React from 'react';

import Signup from './Signupte'; //component for user signup
import Signin from './Signin';   //component for user signin
import BlogPostForm from './BlogPostForm'; //component to create new blog posts
import PostList from './PostList'; //component to display list of blog posts

//main page that has the components
function App() 
{
  return (
    <div>
      <h1>Blog App</h1>
      <Signup />
      <Signin />
      <BlogPostForm />
      <PostList />
    </div>
  );
}

//to be used else where in the application
export default App;


