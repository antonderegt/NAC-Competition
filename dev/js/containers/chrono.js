import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'

class Nac extends Component {
  render() {
    return (
      <div>
        <h1>Chronoloog</h1>
        <p>
          <i>Ochtendprogramma 11:30 – 12:30</i><br />
          Lunch bij Pels Rijcken & Drooglever Fortuijn <br /><br />
          <i>Wedstrijdprogramma 13:00 – 18:00</i><br />
          De eerste pleit ronden vangt aan om 13:30 tot 14:10.
          De teams zullen daarna in ronde twee de zaak van de andere kant bepleiten.
          De tweede pleitronde vangt aan om 14:25 – 15:40.
          De finale wordt naar verwachting gehouden om 16:30 – 17:20. <br /><br />

          <i>Avondprogramma 18:00 - 22:00</i><br />
          Drie gangen diner bij een restaurant op loopafstand van het gerechtshof. Meer info volgt.
        </p>
        {/*@TODO Click on location to get directions*/}
        {/*}<table>
          <tbody>
          <tr>
            <th>Tijd</th>
            <th>Activiteit</th>
            <th>Locatie</th>
          </tr>
          <tr>
            <td>11:30 – 12:30</td>
            <td>Lunch voor deelnemers & publiek</td>
            <td>Pels Rijcken & Droogleever Fortuijn</td>
          </tr>
          <tr>
            <td>13:00 – 13:30</td>
            <td>Opening NAC 2017</td>
            <td>Volgt nog</td>
          </tr>
          <tr>
            <td>13:30 – 14:10</td>
            <td>Pleitronde 1</td>
            <td>Verschilt per team</td>
          </tr>
          <tr>
            <td>14:25 – 15:40</td>
            <td>Pleitronde 2</td>
            <td>Verschilt per team</td>
          </tr>
          <tr>
            <td>15:40 – 16:25</td>
            <td>Borrel voor deelnemers & medewerkers van het Gerechtshof</td>
            <td>Centrale Hal H</td>
          </tr>
          <tr>
            <td>16:30 – 17:20</td>
            <td>Finale</td>
            <td></td>
          </tr>
          <tr>
            <td>17:30 – 18:00</td>
            <td>Prijsuitreiking en afsluiting</td>
            <td>Centrale Hal H</td>
          </tr>
          <tr>
            <td>18:00</td>
            <td>Diner</td>
            <td></td>
          </tr>
          </tbody>
        </table>
        */}
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
