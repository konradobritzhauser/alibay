import React, { Component } from 'react'
import { connect } from 'react-redux'

import SmItem from './smItem'

import { fetchItemsAction } from '../actions/itemActions'

export class Items extends Component {
  componentDidMount() {
    this.props.fetchItemsAction()
  }

  render() {
    const getItems = () => {
      // console.log('this.props.items', this.props.items)
      let { items } = this.props
      // console.log('items from Items component ', items)
      if (items !== undefined) {
        return items.map(item => <SmItem item={item} key={item._id} />)
      }
    }
    return <div>{getItems()}</div>
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}
export default connect(
  mapStateToProps,
  { fetchItemsAction }
)(Items)
