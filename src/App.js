import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";
import "./styles/index.css";
import { isEmpty } from "./components/Utils";

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);

  return (
    <div>
      <h1>Extreme</h1>
      <div className="post-user">
        <PostForm />
        <User />
      </div>

      <div className="post-container">
        {!isEmpty(posts) &&
          posts.map((post, index) => <Post post={post} key={index} />)}
      </div>
    </div>
  );
};

export default App;
