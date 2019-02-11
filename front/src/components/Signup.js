import React, { Component } from 'react'

export class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <div>Signup</div>
    )
  }
}

export default Signup
