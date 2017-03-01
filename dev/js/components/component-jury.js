import React from 'react';

const JuryComponent = (props) => (
  <div className={props.containerDiv} onClick={() => props.onClick()}>
    <div>
      <img src={props.jury.img} className={props.imgageSize} alt={props.jury.name}/>
      <div className={props.nameDiv}>
        <span>{props.jury.name}</span>
      </div>
    </div>
    <div className={props.descDiv}>
      <p>{props.desc}</p>
    </div>
  </div>
);

export default JuryComponent;
