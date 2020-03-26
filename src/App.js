import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import Item from './Item'
import ItemForm from './ItemForm'

class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(items => this.setState({items}))
  }

  state = {
    page: "Items",
    items: [],
    cart: [],
    term: ""
  }

  changeView = (page) => {
    console.log(this);
    //this.setState({page: "Cart"})
    this.setState({page})
  }

  addToCart = (id) => {
    let item = this.state.items.find(item => item.id === id)
    this.setState(prevState => {
      return ({cart: [...prevState.cart, item]})
    }, () => console.log(this.state))
  }

  addToItems = (item) => {
    this.setState(prevState => {
      return ({items: [...prevState.items, item]})
    })
  }



  render(){
    return (
      <div className="App">
        <Header changeView={this.changeView}/>

          <Route path="/cart" component={() => <CartContainer cart={this.state.cart}/>}/>
          <Route path="/items/new" component={() => <ItemForm addToItems={this.addToItems} />}/>

          {/* //below will not work */}
          <Route path="/items/:id" render={({match}) =>  <Item id={match.params.id} addToCart={this.addToCart} />}/>
          <Route path="/" component={() => <ItemsContainer addToCart={this.addToCart} cart={this.state.cart} items={this.state.items}  />}/>


      </div>
    )};
}

export default App;
