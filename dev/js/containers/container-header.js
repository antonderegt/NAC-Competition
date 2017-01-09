import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'
import { HOME, INFO, CHRONO, JURY, CONTACT } from '../actions/actions'
import HeaderComponent from '../components/component-header'


class Header extends Component {
  render() {
    return (
      <HeaderComponent title={
        this.props.display == INFO ? "Informatie" :
        this.props.display == CHRONO ? "Chronoloog" :
        this.props.display == JURY ? "Juryleden" :
        this.props.display == CONTACT ? "Contact" :
        "Nationaal Appèlconcours"
        }
        onClick={() => this.props.actionDisplay(HOME)}
      />
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    display: state.display.display
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionDisplay}, dispatch)
}

// Connect store and actions to the class Header
export default connect(mapStateToProps, matchDispatchToProps)(Header)
