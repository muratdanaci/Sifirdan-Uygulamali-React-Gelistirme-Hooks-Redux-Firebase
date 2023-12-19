import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center text-center">
        <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loading;