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
import Category from './components/Category'
import ItemPage from './components/ItemPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
    }
  }
  renderSignup() {
    return <Signup />
  }

  renderLogin() {
    return <Login />
  }

  updateId(event) {
    return () => {
      this.setState({
        id: event.target.value
      })
    }
  }

  renderItems() {
    return (
      <div className="container-fluid d-flex h-100 flex-column bg-danger mh-100 category-item-holder">
        <div className="row category-item-row">
          <div className="bg-primary col-md-3 h-100 ">
            <Category />
          </div>
          <div className="bg-success col-md-9 h-100 item-holder">
            <Items />
          </div>
        </div>
      </div>
    )
  }

  renderSellForm() {
    return <SellForm />
  }

  renderCart() {
    return <Cart />
  }

  renderDetails() {
    return <ItemPage />
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Navbar />
          <Route exact path="/signup" render={this.renderSignup} />
          <Route exact path="/login" render={this.renderLogin} />
          <Route exact path="/items" render={this.renderItems} />
          <Route exact path="/items/:id" render={this.renderDetails} />
          <Route exact path="/sell-form" render={this.renderSellForm} />
          <Route exact path="/cart" render={this.renderCart} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
