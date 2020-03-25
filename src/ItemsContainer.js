import React from 'react'

import Item from './Item'
import FilterBar from './FilterBar'

class ItemsContainer extends React.Component{

  isInCart(id) {
    return this.props.cart.find(item => item.id === id) ? true : false
  }

  render(){
    return(
      <div id="items-container">
        <FilterBar/>
        {this.props.items.map((item) => <Item key={item.id} id=
        {item.id} name={item.name} image1={item.image1} image2={item.image2} price={item.price} addToCart={this.props.addToCart} isInCart={this.isInCart(item.id)}/>)}
      </div>
    )
  }
}

export default ItemsContainer
