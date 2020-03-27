import React from 'react'
import {Link} from 'react-router-dom'

import Countdown from './Countdown'

function CartContainer(props){

  function showItems(){
    return props.cart.map(item => {
      return (
        <div key={item.id}>

          Item:  <Link to={'/items/' + item.id} >{item.name}</Link>
          <br/>
          Price: {item.price}
          <br/>
        </div>
      )})
    }

  return(
    <div id="cart-container">
      <Countdown/>
      {props.cart.length === 0 ? <h3>Cart is empty!</h3> : showItems()}
    </div>
  )


}

export default CartContainer
