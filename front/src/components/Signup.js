import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import '../css/style.css'
import axios from 'axios'

import { loginAction } from '../actions/userActions'

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
      const data = await (await axios.post('/user/signup', body)).data
      console.log('data', data)
      if (data.success) {
        console.log('data.success', data.success)
        // If backend gives {success: true} then we set store
        this.props.history.push('/items')
        this.props.loginAction()
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  render() {
    return (
      <div className="aligner">
        <div className="signup-form-modal">
          <h4 className="signup-title">Sign Up</h4>

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

export default connect(
  null,
  { loginAction }
)(withRouter(Signup))
