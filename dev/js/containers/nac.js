import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'
import { INFO, CHRONO, JURY, CONTACT } from '../actions/actions'

class Nac extends Component {
  clickHandler(payload) {
    this.props.actionDisplay(payload)
  }
  render() {
    return (
      <div>
        <h1>Nationaal Appèlconcours</h1>
        <div className="box box-1" onClick={() => this.clickHandler(INFO)}><h3>Informatie</h3></div>
        <div className="box box-2" onClick={() => this.clickHandler(CHRONO)}><h3>Chronoloog</h3></div>
        <div className="box box-3" onClick={() => this.clickHandler(JURY)}><h3>Juryleden</h3></div>
        <div className="box box-4" onClick={() => this.clickHandler(CONTACT)}><h3>Contact</h3></div>
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
