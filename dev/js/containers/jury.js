import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionJuryLoad } from '../actions/actions'

class Nac extends Component {
  componentWillMount() {
    this.props.actionJuryLoad()
  }
  render() {
    return (
      <div>
        <h1>Juryleden</h1>
        <img src="./images/icon-4x.png" alt="Piet" />
        <h2>Piet</h2>
        <h3>Piet is een rechter die heel slim is</h3>
        <div>
          <h2>Juryleden</h2>
          <img src="./images/icon-1x.png" alt="Piet" />
          <img src="./images/icon-1x.png" alt="Piet" />
          <img src="./images/icon-1x.png" alt="Piet" />
          <img src="./images/icon-1x.png" alt="Piet" />
        </div>
      </div>
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    state: state.juryMembers
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionJuryLoad}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Nac)
