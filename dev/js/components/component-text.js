import React from 'react';

const Text = (props) => (
  <div className="sub-container">
    {props.text}
    <div onClick={() => props.onClick()} className="md-button"><h3>X</h3></div>
  </div>
);

export default Text;
