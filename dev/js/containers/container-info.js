import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay, HOME } from '../actions/actions'
import InfoComponent from '../components/component-info'

class Info extends Component {
  actionDisplay() {
    this.props.actionDisplay(HOME)
  }
  render() {
    return (
      <InfoComponent
        title={this.props.display}
        onClick={() => this.actionDisplay()}
      />
    )
  }
}

// Get acces to the store
const mapStateToProps = (state) => {
  return {
    display: state.display.display
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionDisplay}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Info)
