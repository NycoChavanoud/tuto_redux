import React from "react";
import "../styles/user.css";

const User = () => {
  return (
    <div className="user-container">
      <div className="user">
        <h3>userPseudo</h3>
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="avatar"
          id="avatar"
        />
        <p>Age : 35 ans</p>
        <p>Like(s) : 0</p>
      </div>
    </div>
  );
};

export default User;
