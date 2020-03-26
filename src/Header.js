import React from 'react'
import { Link } from "react-router-dom";

function Header(props){
  return(
    <div id="header">
      <h1>Quarantine Shopping</h1>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/cart">Cart</Link>
        </button>
        <button>
          <Link to="/items/new">Add Item</Link>
        </button>
      </nav>
    </div>
  )
}

export default Header



