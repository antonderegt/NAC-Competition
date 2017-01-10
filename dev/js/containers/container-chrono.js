import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { HOME, actionTeamSelect, actionDisplay } from '../actions/actions'
import ChronoComponent from '../components/component-chrono'

class Chrono extends Component {
  arrowBackHandler() {
    this.props.actionDisplay(HOME)
  }
  actionTeamSelect(e) {
    this.props.actionTeamSelect(e.target.value)
  }
  render() {
    return (
      <ChronoComponent
        teams={this.props.teams}
        teamSelected={this.props.teamSelected}
        actionTeamSelect={e => {this.actionTeamSelect(e)}}
        onClick={() => {this.arrowBackHandler()}}/>
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    teams: state.chrono.teams,
    teamSelected: state.chrono.teamSelected
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionTeamSelect, actionDisplay}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Chrono)
