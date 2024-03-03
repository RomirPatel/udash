
import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";


export const Component = ({ className, hasRectangle = true }) => {
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
          <div className="profile-2">Profile</div>
        </div>
      </div>
      <div className="frame">
      <Link to="/">
        <div className="text-wrapper-2">Home</div>
        </Link>
      
        <Link to="/rewards">
        <div className="text-wrapper-2">Rewards</div>
        </Link>
        {hasRectangle && <div className="rectangle-2"/>}
      </div>
    </div>
  );

  Component.propTypes = {
    hasRectangle: PropTypes.bool,
  }
};
