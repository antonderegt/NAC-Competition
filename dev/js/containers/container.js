import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay } from '../actions/actions'
import { NAC, INFO, CHRONO, JURY, CONTACT } from '../actions/actions'
import Nac from './nac'
import Text from './container-text'
import Jury from './jury'

class Container extends Component {
  render() {
    return (
      <div className="container">
        {
          this.props.display == NAC ?
            <Nac /> :
            this.props.display == JURY ?
                <Jury /> :
            <Text display={this.props.display} />
        }
      </div>
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    display: state.display.display
  }
}

// Connect store and actions to the class Container
export default connect(mapStateToProps)(Container)
