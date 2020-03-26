import React from 'react'
import Item from './Item'

class ItemsContainer extends React.Component{

  isInCart(id) {
    return this.props.cart.find(item => item.id === id) ? true : false
  }

  render(){
    return(
      <div id="items-container">

        {this.props.items.map((item) => <Item key={item.id} item={item} addToCart={this.props.addToCart} isInCart={this.isInCart(item.id)}/>)}
      </div>
    )
  }
}

export default ItemsContainer
