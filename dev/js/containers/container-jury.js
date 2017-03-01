import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { HOME, actionDisplay, actionJurySelect } from '../actions/actions'
import JuryComponent from '../components/component-jury'

class Jury extends Component {
  arrowBackHandler() {
    this.props.actionDisplay(HOME)
  }
  render() {
    return (
        <div className="sub-container">
          {this.props.juryMembers.map(jury => {
            if(jury.id == this.props.jurySelected.id) {
              return (
                <JuryComponent
                  key={jury.id}
                  onClick={() => {this.props.actionJurySelect("")}}
                  jury={jury}
                  containerDiv="jury-big"
                  nameDiv="jury-big-name"
                  descDiv="jury-big-desc"
                  imageSize="big"
                    desc={jury.descLong}
                />
              )
            } else {
              return (
                <JuryComponent
                  key={jury.id}
                  onClick={() => {this.props.actionJurySelect(jury)}}
                  jury={jury}
                  containerDiv="jury-small"
                  nameDiv="jury-small-name"
                  descDiv="jury-desc"
                  imgageSize="small"
                    desc={jury.descShort}
                />
              )
            }
          })}
          <div onClick={() => this.arrowBackHandler()} className="arrowBack"><img src="./images/ic_arrow_back_white_24dp_1x.png"/></div>
        </div>
    )
  }
}

// Get acces to the store
function mapStateToProps(state) {
  return {
    juryMembers: state.jury.juryMembers,
    jurySelected: state.jury.jurySelected
  }
}

// Get acces to addUser action
function matchDispatchToProps(dispatch) {
  return bindActionCreators({actionDisplay, actionJurySelect}, dispatch)
}

// Connect store and actions to the class UserAdd
export default connect(mapStateToProps, matchDispatchToProps)(Jury)
