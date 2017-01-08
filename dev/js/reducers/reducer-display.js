import React from 'react'
import { DISPLAY, NAC } from '../actions/actions'

const reducerDisplay = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY:
      return Object.assign({}, state, {display: action.payload})
      break;
    default:
      return state
  }
}

const infoText = <p>
  Traditiegetrouw organiseert Eggens ook dit jaar weer het Nationaal Appèlconcours.
  De vijfde editie van het NAC zal plaats vinden op vrijdag 17 maart 2017 in het
  Gerechtshof te ‘s-Gravenhage.<br /><br />

  In het Nationaal Appèlconcours draait het om het bepleiten van een zaak in
  hoger beroep. Alle teams krijgen de gelegenheid om zaak zowel van de kant van
  de appellant als van de geïntimeerde te bepleiten.

  <br /><br />De dag begint voor de deelnemers en juridische aangelegd publiek
  met een goed verzorgde lunch op het kantoor van Pels Rijcken & Droogleever Fortuijn
  in Den Haag. Om de dag in goed gezelschap af te sluiten willen wij zowel de deelnemers
  als het publiek uitnodigen voor een heerlijk diner.<br /><br />

  Zin om deel te nemen aan deze gezellige en leerzame wedstrijden?
  Aanmelden kan door te mailen naar: <b>concours@pleitgenootschap-eggens.nl</b>.
  Inschrijven is mogelijk tot uiterlijk 17 januari 2017.
</p>

const chronoText = <div>
  <p>
    <b>11:30 - 12:30</b> <i>Ochtendprogramma</i><br />
    Lunch bij Pels Rijcken & Drooglever Fortuijn<br /><br />
    <b>13:00 - 18:00</b> <i>Wedstrijdprogramma</i><br />
  </p>
  <table>
    <tbody>
      <tr>
        <th>Tijd</th>
        <th>Activiteit</th>
        <th>Locatie</th>
      </tr>
      <tr>
        <td>13:30 - 14:10</td>
        <td>1e Pleitronde</td>
        <td>Team afhankelijk</td>
      </tr>
      <tr>
        <td>14:25 - 15:40</td>
        <td>2e Pleitronde</td>
        <td>Team afhankelijk</td>
      </tr>
      <tr>
        <td>16:30 - 17:20</td>
        <td>Finale</td>
        <td>Volgt</td>
      </tr>
    </tbody>
  </table>
  <p>
    De teams zullen in ronde twee de zaak van de andere kant bepleiten.<br /><br />
    <b>18:00 - 22:00</b> <i>Avondprogramma</i><br />
    Drie gangen diner bij een restaurant op loopafstand van het gerechtshof. Meer info volgt.
  </p>
</div>

const contactText = <p>
  Stuur een mail naar: <b>concours@pleitgenootschap-eggens.nl</b><br /><br />

  Meer informatie is te vinden op de site van:&nbsp;
  <a href="https://www.pleitgenootschap-eggens.nl" target="_blank" rel="noopener">Pleigenootschap Eggens</a>.<br /><br />

  Op de dag zelf is het volgende nummer bereikbaar voor vragen: <b>06-xxxxxxxx</b>.
</p>

const initialState = {
  display: NAC,
  INFO: infoText,
  CHRONO: chronoText,
  CONTACT: contactText
}

export default reducerDisplay
