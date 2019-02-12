import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import './css/style.css'

import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Footer from './components/Footer'
import Items from './components/Items'
import SellForm from './components/SellForm'
import Cart from './components/Cart'

class App extends Component {
  renderSignup () {
    return <Signup />
  }

  renderLogin () {
    return <Login />
  }

  renderItems () {
    return <Items />
  }

  renderSellForm () {
    return <SellForm />
  }

  renderCart () {
    return <Cart />
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/signup' render={this.renderSignup} />
          <Route exact path='/login' render={this.renderLogin} />
          <Route exact path='/items' render={this.renderItems} />
          <Route exact path='/sell-form' render={this.renderSellForm} />
          <Route exact path='/cart' render={this.renderCart} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
