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
          Stuur een mail naar: <b>concours@pleitgenootschap-eggens.nl</b><br /><br />

          Meer informatie is te vinden op de site van:&nbsp;
          <a href="https://www.pleitgenootschap-eggens.nl" target="_blank" rel="noopener">Pleigenootschap Eggens</a>.<br /><br />

          Op de dag zelf is het volgende nummer bereikbaar voor vragen: <b>06-xxxxxxxx</b>.
        </p>
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
