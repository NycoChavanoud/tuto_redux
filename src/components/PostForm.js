import React from "react";
import "../styles/postForm.css";

const PostForm = () => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
