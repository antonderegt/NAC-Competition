import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'

class Nac extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>Stuur een mail naar: <b>concours@pleitgenootschap-eggens.nl</b></p>
        <p>Meer informatie is te vinden op de site van <a href="https://www.pleitgenootschap-eggens.nl" target="_blank" rel="noopener">Pleigenootschap Eggens</a>.</p>
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
