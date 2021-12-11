import React from "react";

const Like = ({ post }) => {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/JustFS/redux-basics/58e36f04e389515c7e6724c83bb2afdcaaabc359/public/icons/clap.png"
        className="clap"
        alt="clap"
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
