import React from 'react';

const HeaderComponent = (props) => (
  <header onClick={props.onClick}>
    <h3>{props.title}</h3>
  </header>
);

export default HeaderComponent;
