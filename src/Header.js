import React from 'react'
import { Link } from "react-router-dom";

function Header(props){
  return(
    <div id="header">
      <h1 onClick={(e) => props.changeView("Items")}>Quarantine Shopping</h1>
      <button onClick={(e) => props.changeView("Cart")}> View Cart</button>
    </div>
  )
}

export default Header



