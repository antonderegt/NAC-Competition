import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'
import { INFO, CHRONO, JURY, CONTACT } from '../actions/actions'
import HomeComponent from '../components/component-home'

class Home extends Component {
  render() {
    return (
      <HomeComponent
        onClickInfo={() => this.props.actionDisplay(INFO)}
        onClickChrono={() => this.props.actionDisplay(CHRONO)}
        onClickJury={() => this.props.actionDisplay(JURY)}
        onClickContact={() => this.props.actionDisplay(CONTACT)}
      />
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    null
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionDisplay}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Home)
