import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Footer from './components/Footer'

class App extends Component {
  renderSignup() {
    return <Signup />
  }

  renderLogin() {
    return <Login />
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/signup" render={this.renderSignup} />
          <Route exact path="/login" render={this.renderLogin} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
