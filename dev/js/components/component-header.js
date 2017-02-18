import React from 'react';

const HeaderComponent = (props) => (
  <header onClick={props.onClick}>
    <h2>{props.title}</h2>
  </header>
);

export default HeaderComponent;
