import React, { Component } from 'react'
import { connect } from 'react-redux'

<<<<<<< Updated upstream
import MdItem from './MdItem'
=======
import SmItem from './SmItem'
>>>>>>> Stashed changes

import { fetchItemsAction } from '../actions/itemActions'

export class Items extends Component {
  componentDidMount () {
    this.props.fetchItemsAction()
  }

  render () {
    const getItems = () => {
      // console.log('this.props.items', this.props.items)
      let { items } = this.props
      // console.log('items from Items component ', items)
      if (items !== undefined) {
        return items.map(item => <MdItem item={item} key={item._id} />)
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
