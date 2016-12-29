import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { action } from '../actions/actions'

class Container extends Component {
  constructor(){
    super()
    this.state = {
      data: "data"
    }
  }
  render() {
    return (
      <div>
        <h1>Nationaal Appèlconcours</h1>
        <h2>Programma Boekje</h2>
        <p>Melden 11:00</p>
      </div>
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    state
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({action}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Container)
