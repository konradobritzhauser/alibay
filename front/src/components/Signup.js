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
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    let body = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      const data = await (await axios.post('/user/signup', {
        body
      })).data
      console.log(data)
    } catch (err) {
      console.log('err', err)
    }
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
                className="btn btn-dark btn-block submit-button-signup"
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
