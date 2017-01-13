import React from 'react';

const ContactComponent = (props) => (
  <div className="sub-container">
    <p>
      Stuur een mail naar: <b>concours@pleitgenootschap-eggens.nl</b><br /><br />

      Meer informatie is te vinden op de site van:&nbsp;
      <a href="https://www.pleitgenootschap-eggens.nl" target="_blank" rel="noopener">Pleitgenootschap Eggens</a>.<br /><br />

      Op de dag zelf is het volgende nummer bereikbaar voor vragen: <b>06-xxxxxxxx</b>.
    </p>
    <div onClick={() => props.onClick()} className="arrowBack"><img src="./images/ic_arrow_back_white_24dp_1x.png" /></div>
  </div>
);

export default ContactComponent;
