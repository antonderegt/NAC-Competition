import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionDisplay, actionJuryLoad, actionJurySelect } from '../actions/actions'
import { NAC } from '../actions/actions'

class Nac extends Component {
  componentWillMount() {
    this.props.actionJuryLoad()
  }
  juryClickHandler(jury) {
    this.props.actionJurySelect(jury)
  }
  mdButtonHandler() {
    this.props.actionDisplay(NAC)
  }
  render() {
    return (
      <div className="sub-container">
        {this.props.state.juryMembers.map(jury => {
          if(jury.id == this.props.state.jurySelected.id) {
            return (
              <div key={jury.id} className="jury-big" onClick={() => {this.juryClickHandler(jury)}}>
                  <img src={jury.img} alt={jury.name}/>
                <div className="jury-name">
                  <h2 key={jury.id}>{jury.name}</h2>
                </div>
              <div key={jury.name} className="jury-desc">
                <p key={jury.id}>{jury.descLong}</p>
              </div>
            </div>
            )
          } else {
            return (
              <div key={jury.id} className="jury-small" onClick={() => {this.juryClickHandler(jury)}}>
                <img src={jury.img} alt={jury.name}/>
                <div className="jury-name">
                  <h3 key={jury.id}>{jury.name}</h3>
                </div>
                <div className="jury-desc">
                  <p key={jury.name}>{jury.descShort}</p>
                </div>
              </div>
            )
          }
        })}
        <div onClick={() => this.mdButtonHandler()} className="md-button"><h3>X</h3></div>
      </div>
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    state: state.display,
    state: state.juryMembers
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionDisplay, actionJuryLoad, actionJurySelect}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Nac)
