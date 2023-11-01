import React from "react";
import "./style.css";

const Loader = (props) => {
  return (
    <span className="CircularLoader" {...props}>
      <svg className="circular-loader" viewBox="25 25 50 50">
        <circle
          className="loader-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </span>
  );
};

export default Loader;
