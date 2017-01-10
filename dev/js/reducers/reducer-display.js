import React from 'react'
import { DISPLAY, HOME } from '../actions/actions'

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
  hoger beroep. Alle teams krijgen de gelegenheid om de zaak zowel van de kant van
  de appellant als van de geïntimeerde te bepleiten.

  <br /><br />De dag begint voor de deelnemers en juridische aangelegd publiek
  met een goed verzorgde lunch op het kantoor van Pels Rijcken & Droogleever Fortuijn
  in Den Haag. Om de dag in goed gezelschap af te sluiten willen wij zowel de deelnemers
  als het publiek uitnodigen voor een heerlijk diner.<br /><br />

  Zin om deel te nemen aan deze gezellige en leerzame wedstrijden?
  Aanmelden kan door te mailen naar: <b>concours@pleitgenootschap-eggens.nl</b>.
  Inschrijven is mogelijk tot uiterlijk 17 januari 2017.
</p>

const contactText = <p>
  Stuur een mail naar: <b>concours@pleitgenootschap-eggens.nl</b><br /><br />

  Meer informatie is te vinden op de site van:&nbsp;
  <a href="https://www.pleitgenootschap-eggens.nl" target="_blank" rel="noopener">Pleigenootschap Eggens</a>.<br /><br />

  Op de dag zelf is het volgende nummer bereikbaar voor vragen: <b>06-xxxxxxxx</b>.
</p>

const initialState = {
  display: HOME,
  INFO: infoText,
  CONTACT: contactText
}

export default reducerDisplay
