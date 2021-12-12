import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost } from "../actions/post.action";
import Like from "./Like";
import { isEmpty } from "./Utils";
import "../styles/post.css";

const Post = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    const postData = {
      title: post.title,
      author: user[0].pseudo,
      content: editContent,
      likes: post.likes,
      id: post.id,
    };
    dispatch(editPost(postData));
    setEditToggle(false);
  };

  return (
    <div className="post">
      {!isEmpty(user[0]) && user[0].pseudo === post.author && (
        <div className="edit-delete">
          <img
            onClick={() => setEditToggle(!editToggle)}
            src="https://raw.githubusercontent.com/JustFS/redux-basics/58e36f04e389515c7e6724c83bb2afdcaaabc359/public/icons/edit.svg"
            alt="edit"
          />
          <img
            onClick={() => dispatch(deletePost(post.id))}
            src="https://raw.githubusercontent.com/JustFS/redux-basics/58e36f04e389515c7e6724c83bb2afdcaaabc359/public/icons/delete.svg"
            alt="delete"
          />
        </div>
      )}
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            type="text"
            defaultValue={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}
      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};
export default Post;
