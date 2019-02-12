import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchItemsAction } from '../actions/itemActions'

export class Items extends Component {
  componentDidMount () {
    this.props.fetchItemsAction()
  }

  render () {
    const getItems = () => {
      let { items } = this.props.items
      if (items !== undefined) {
        return items.map(item =>
          (
            <smItem
              items={items}
              key={item._id}
            />
          )
        )
      }
    }
    return (
      <div>
        {getItems()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}
export default connect(mapStateToProps, { fetchItemsAction })(Items)
