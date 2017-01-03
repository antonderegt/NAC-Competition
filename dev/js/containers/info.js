import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'

class Nac extends Component {
  render() {
    return (
      <div>
        <h1>Informatie</h1>
        <p>
          Traditiegetrouw organiseert Eggens ook dit jaar weer het Nationaal Appèlconcours.  De vijfde editie van het NAC zal plaats vinden op vrijdag 17 maart 2017 in het Gerechtshof te ‘s- Gravenhage.  <br /><br />
          In het Nationaal Appèlconcours draait het om het bepleiten van een zaak in hoger beroep. Alle teams krijgen de gelegenheid om zaak zowel van de kant van de appellant als van de geïntimeerde te bepleiten.  De dag begint voor de deelnemers en juridische aangelegd publiek met een goed verzorgde lunch op het kantoor van Pels Rijcken & Droogleever Fortuijn in Den Haag. Om de dag in goed gezelschap af te sluiten willen wij zowel de deelnemers als het publiek uitnodigen voor een heerlijk diner.  <br /><br />
          Zin om deel te nemen aan deze gezellige- en leerzame wedstrijden? Aanmelden kan door te mailen naar: concours@pleitgenootschap-eggens.nl. Inschrijven is mogelijk tot uiterlijk 17 januari 2017.
        </p>
      </div>
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    state: state.display
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionDisplay}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Nac)
