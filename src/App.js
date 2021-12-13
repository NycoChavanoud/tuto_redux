import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";
import "./styles/index.css";

import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <h1>Extreme</h1>
      <div className="post-user">
        <PostForm />
        <User />
      </div>

      <div className="post-container">
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
