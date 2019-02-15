import React, { Component } from 'react'
import '../css/style.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { loginAction } from '../actions/userActions'

class Login extends Component {
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

    //  // Get cookie by name of id of cookie if we need it
    //  const getCookie = (name) => {
    //   let cookie = {}
    //   document.cookie.split(';').forEach(function (el) {
    //     let [k, v] = el.split('=')
    //     cookie[k.trim()] = v
    //   })
    //   console.log(cookie, cookie[name])
    //   return cookie[name]
    // }

    let body = {
      username: this.state.username,
      password: this.state.password
    }

    try {
      const data = await (await axios({
        method: 'post',
        url: '/user/login',
        data: body,
        credentials: 'include'
      })).data
      // console.log(data)
      if (data.success) {
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
        <div className="login-form-modal">
          <h4 className="login-title">Login</h4>

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
                className="btn btn-dark btn-block submit-button-login"
                value="Login"
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
)(withRouter(Login))
