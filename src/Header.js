import React from 'react'
import { NavLink } from "react-router-dom";

function Header(props){
  return(
    <div id="header">
      <h1>Quarantine Shopping</h1>
      <nav>
        <NavLink to="/cart">
          <button> View Cart </button>
        </NavLink>
        <NavLink to="/items">
          <button> View Items </button>
        </NavLink>
        <NavLink to="/items/new">
          <button> Add a New Item</button>
        </NavLink>
        <NavLink to="/">
          <button> Home</button>
        </NavLink>
      </nav>

    </div>
  )
}

export default Header



