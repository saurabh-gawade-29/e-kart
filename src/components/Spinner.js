import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

const Spinner = () => {
  const myStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "",
  };
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      {+(promiseInProgress === true) ? (
        <div style={myStyle}>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Spinner;
