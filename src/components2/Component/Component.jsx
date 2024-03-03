
import PropTypes from "prop-types";
import React from "react";
import "./style.css";
export const Component = ({ className, hasRectangle = true }) => {
  return (
    <div className={`component ${className}`}>
      <p className="u-dash">
        <span className="text-wrapper">UD</span>
        <span className="span">ash</span>
      </p>
      <div className="other-links">
        <div className="div">1500 pts</div>
        <div className="ellipse" />
        <div className="profile">
          <div className="profile-2">Profile</div>
        </div>
      </div>
      <div className="frame">
        <div className="text-wrapper-2">Home</div>
      
        <div className="text-wrapper-3">Rewards</div>
     
        {hasRectangle && <div className="rectangle-2" />}
      </div>
    </div>
  );
};

Component.propTypes = {
  hasRectangle: PropTypes.bool,
};
