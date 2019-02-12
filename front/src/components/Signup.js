import React, { Component } from 'react'
import '../css/style.css'
import axios from 'axios'

class Signup extends Component {
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
    axios('http://localhost:4000/user/signup', {
      method: 'POST',
      body: JSON.stringify(currentBody)
    })
      .then(function(x) {
        return x.text()
      })
      .then(function(responseBody) {
        alert(responseBody)
      })
  }

  render() {
    return (
      <div className="aligner">
        <div className="signup-form-modal">
          <h2>Sign Up</h2>
          <span className="close-signup">&times;</span>
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
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-dark btn-block"
                value="Create Account"
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
