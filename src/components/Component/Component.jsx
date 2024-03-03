
import React from "react";
import "./style.css";

export const Component = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <p className="u-dash">
        <span className="text-wrapper">UD</span>
        <span className="span">ash</span>
      </p>
      <div className="other-links">
        <div className="text-wrapper-2"> 1500 pts</div>
        <div className="ellipse" />
        <div className="profile">
          <div className="profile-2">ktrl-g</div>
        </div>
      </div>
      <div className="frame">
        <div className="text-wrapper-3">Home</div>
        <button class="button"> <div className="text-wrapper-4">Rewards</div></button> 
        <div className="rectangle-2" />
      </div>
    </div>
  );
};
