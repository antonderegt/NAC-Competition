import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'
import { NAC } from '../actions/actions'


class Header extends Component {
  clickHandler(payload) {
    this.props.actionDisplay(payload)
  }
  render() {
    return (
      <div>
        <header onClick={() => this.clickHandler(NAC)}>
          <h3>{this.props.state.display == NAC? "17 maart 2017" : "<- Terug naar beginscherm"}</h3>
          {/*@TODO Right hamburger img*/}
        </header>
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

// Connect store and actions to the class Header
export default connect(mapStateToProps, matchDispatchToProps)(Header)
