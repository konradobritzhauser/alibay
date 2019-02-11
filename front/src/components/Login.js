import React, { Component } from 'react'
import '../css/style.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    let currentBody = {
      username: this.state.username,
      password: this.state.password
    }
    fetch('/user/login', { method: 'POST', body: JSON.stringify(currentBody) })
  }

  render() {
    return (
      <div className="login-form-modal">
        <span className="close-login">&times;</span>
        <form onSubmit={this.handleSubmit} method="post">
          <div className="form-group">
            <input
              type="text"
              onChange={this.handleUsernameChange}
              className="form-control"
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              onChange={this.handlePasswordChange}
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div class="form-group">
            <button type="submit" className="btn btn-dark btn-block">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
