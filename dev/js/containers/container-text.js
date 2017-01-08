import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay, NAC } from '../actions/actions'
import Text from '../components/component-text'

class Info extends Component {
  render() {
    let title = this.props.display
    return (
      <Text
        title={title}
        text={this.props.text[title]}
        onClick={() => {
          this.props.actionDisplay(NAC)
        }}
      />
    )
  }
}

// Get acces to the store
const mapStateToProps = (state) => {
  return {
    display: state.display.display,
    text: state.display
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionDisplay}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Info)
