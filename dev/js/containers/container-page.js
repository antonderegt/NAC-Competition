import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay, HOME } from '../actions/actions'
import PageComponent from '../components/component-page'

class Page extends Component {
  render() {
    let title = this.props.display
    return (
      <PageComponent
        title={title}
        text={this.props.text[title]}
        onClick={() => {
          this.props.actionDisplay(HOME)
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
export default connect(mapStateToProps, matchDispatchToProps)(Page)
