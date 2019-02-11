import React, { Component } from 'react'

export class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <div>Login</div>
    )
  }
}

export default Login
