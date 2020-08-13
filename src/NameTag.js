import React from "react";

var NameTag = (props) => (
  <div className="name-tag">
    <h3 className="title">HELLO</h3>
    <p className="subtitle">my name is</p>
    <h2 className="name">{props.name}</h2>
  </div>
);

export default NameTag;
