import React from 'react';

const Text = (props) => (
  <div className="sub-container">
    {props.text}
    <div onClick={() => props.onClick()} className="arrowBack"><img src="./images/ic_arrow_back_white_24dp_1x.png" /></div>
  </div>
);

export default Text;
