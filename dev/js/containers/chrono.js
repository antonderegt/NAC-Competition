import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'

class Nac extends Component {
  render() {
    return (
      <div>
        <h1>Chronoloog</h1>
        <table>
          <tbody>
          <tr>
            <th>Tijd</th>
            <th>Activiteit</th>
            <th>Locatie</th>{/*@TODO Click on location to get directions*/}
          </tr>
          <tr>
            <td>11:00</td>
            <td>Melden</td>
            <td>Grote Zaal</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>Wedstrijd 1</td>
            <td>Grote Zaal</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td>Wedstrijd 2</td>
            <td>Kleine Zaal</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td>Wedstrijd 3</td>
            <td>Middel Zaal</td>
          </tr>
          </tbody>
        </table>
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
