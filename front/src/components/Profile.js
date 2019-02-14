import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Profile extends Component {
  render () {
    return (
      <div className='container text-center'>
        <div>I'm loggedin. That's {this.props.loggedin.toString()}</div>
        <div>Name:</div>
        <div>Last name:</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedin: state.user.loggedIn
  }
}
export default connect(mapStateToProps)(Profile)
