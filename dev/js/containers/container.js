import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'
import { NAC, INFO, CHRONO, JURY, CONTACT } from '../actions/actions'
import Nac from './nac'
import Info from './info'
import Chrono from './chrono'
import Jury from './jury'
import Contact from './contact'

class Container extends Component {
  render() {
    return (
      <div className="container">
        { this.props.state.display == INFO ? <Info /> :
          this.props.state.display == CHRONO ? <Chrono /> :
          this.props.state.display == JURY ? <Jury /> :
          this.props.state.display == CONTACT ? <Contact /> :
          this.props.state.display == NAC ? <Nac /> : <Nac />}
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

// Connect store and actions to the class Container
export default connect(mapStateToProps)(Container)
