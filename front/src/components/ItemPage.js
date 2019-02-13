import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import { Route, BrowserRouter, Link } from 'react-router-dom'

class ItemPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsArr: []
    }
  }

  render() {
    const self = this
    fetch('http://localhost:4000/items/getItems')
      .then(x => x.text())
      .then(responseBody => {
        // console.log('responseBody', responseBody)
        let parsedResponseBody = JSON.parse(responseBody)
        // console.log('parsedResponseBody :', parsedResponseBody)
        let itemId = this.props.itemId
        console.log('itemId :', itemId)
        let itemsArr = parsedResponseBody.results
        // self.setState({ itmesArr: itemsArr })
        // console.log('itemsArr :', itemsArr)
      })

    console.log('self', self)
    // for (let item of itemsArr) {
    //   console.log('item', item)
    // }

    //   function filterArray(elem) {
    //     if (elem._id === itemId) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   }

    //   correctItem = itemsArr.filter(filterArray)[0]
    //   console.log('correct item', correctItem)
    // })

    // setTimeout(,500)
    // let _id = correctItem._id
    // console.log('_id :', _id)

    return (
      <div className="container">
        Image will be here soon
        {/* <img width='50%' src={image} alt='pcs' /> */}
        {/* <div className="container">
          <div>{title}</div>
          <div>{description}</div>
          <div>${price}</div>
          <div>{likes}</div>
          <div>{category}</div>
          <Link to={`/seller/${seller}`}> See a seller </Link>
        </div>
      </div> */}
      </div>
    )
  }
}

export default ItemPage
