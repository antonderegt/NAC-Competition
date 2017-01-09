import React from 'react';

const HomeComponent = (props) => (
  <div className="flexContainerColumn">
    <div className="flexContainerRow">
      <div className="flexItem" onClick={() => props.onClickInfo()}><h3>Informatie</h3></div>
      <div className="flexItem" onClick={() => props.onClickChrono()}><h3>Chronoloog</h3></div>
    </div>
    <div className="flexContainerRow">
      <div className="flexItem" onClick={() => props.onClickJury()}><h3>Juryleden</h3></div>
      <div className="flexItem" onClick={() => props.onClickContact()}><h3>Contact</h3></div>
    </div>
      <img className="logo" src="./images/eggens.png" alt="Eggens"></img>
  </div>
);

export default HomeComponent;
