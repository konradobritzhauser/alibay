import React, { Component } from 'react'
import '../css/style.css'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="signup-form-modal">
        <span className="close-signup">&times;</span>
        <form action="/examples/actions/confirmation.php" method="post">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-dark btn-block">
              Create Account
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
