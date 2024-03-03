import React, { useState } from "react";
import "./style.css";

export const Rectangle = ({ className }) => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    console.log(clicked);
    setClicked(!clicked);
  }

  return (
    <div>
      {clicked && (
        <div style={{ position: "absolute", zIndex: "99"  }}>
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle-3" />
              <p className="when-march">
                <span className="text-wrapper-6">When: </span>
                <span className="text-wrapper-7">March 6, 2:45PM-3:45PM</span>
              </p>
              <p className="where-the-green">
                <span className="text-wrapper-6">Where:</span>
                <span className="text-wrapper-7"> The Green</span>
              </p>
              <div onClick={() => handleClick()}className="text-wrapper-8">x</div>
            </div>
          </div>
          <a  href="https://docs.google.com/forms/d/1sNVW4jzLzAWXW2mKi0afun5mcfU7dTwTgTGFWd9t2o0/edit" >
          <div style={{ cursor: "pointer"}}  className="text-wrapper-9"> Register Now</div>
          </a>
          
        </div>
      )}
      <div
        style={{cursor: "pointer", position: "absolute", zIndex: "2" }}
        onClick={() => handleClick()}
        className={`rectangle ${className}`}
      />
    </div>
  );
};
