import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'
import { NAC } from '../actions/actions'

class Nac extends Component {
  mdButtonHandler() {
    this.props.actionDisplay(NAC)
  }
  render() {
    return (
      <div className="sub-container">
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
        {/*@TODO Click on location to get directions*/}
        <div onClick={() => this.mdButtonHandler()} className="md-button"><h3>X</h3></div>
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
