import React from "react";
import image from "./images/ProfilePic.ico";

export default function MainPhoto() {
  return (
    <div>
      <img src={image} className="profilePic" alt="Profile"></img>
    </div>
  );
}
