import React from 'react';

const styles = {
  textAlign: 'center',
  color: '#3C485E',
}

const ContactComponent = (props) => (
  <div className="sub-container">
    <p>
      Stuur een mail naar: <b>concours@pleitgenootschap-eggens.nl</b><br /><br />

      Meer informatie is te vinden op de site van:&nbsp;
      <a href="https://www.pleitgenootschap-eggens.nl" target="_blank" rel="noopener">Pleitgenootschap Eggens</a>.<br /><br />

      Op de dag zelf zijn de volgende twee nummers bereikbaar voor vragen:<br />Carine de Roos: <b>06 - 462 100 02</b><br />Tess Lont: <b>06 - 287 057 20</b>.<br /><br /><br /><br />

      <p style={styles}>
        <i><b>Built by <a href="https://ditisanton.nl" target="_blank" rel="noopener">Anton de Regt</a></b></i>
      </p>

    </p>
    <div onClick={() => props.onClick()} className="arrowBack"><img src="./images/ic_arrow_back_white_24dp_1x.png" /></div>
  </div>
);

export default ContactComponent;
