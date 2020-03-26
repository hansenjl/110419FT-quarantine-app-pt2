import React from 'react';
import './App.css';

import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'


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

          { this.state.page === 'Items' ? <ItemsContainer addToCart={this.addToCart} cart={this.state.cart} items={this.state.items}  /> : <CartContainer cart={this.state.cart}/>}


      </div>
    )};
}

export default App;
