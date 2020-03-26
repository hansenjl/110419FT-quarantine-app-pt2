import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import ItemForm from './ItemForm'
import ItemShow from './ItemShow'



class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(items => this.setState({items}))
  }

  state = {
    items: [],
    cart: [],
    term: ""
  }

  // changeView = (page) => {
  //   console.log(this);
  //   //this.setState({page: "Cart"})
  //   this.setState({page})
  // }

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
        <Switch>
          <Route exact path='/items' component={() => <ItemsContainer addToCart={this.addToCart} cart={this.state.cart} items={this.state.items}  />} />
          <Route path='/cart' component={() => <CartContainer cart={this.state.cart}/>}/>
          <Route exact path='/items/new' render={() => <ItemForm addToItems={this.addToItems}/>} />
          <Route exact path='/items/:id' component={({match} ) => <ItemShow items={this.state.items} match={match} id={match.params.id}/>}/>
          <Route exact path="/" render={()=><h1>Welcome!</h1>}/>
        </Switch>

      </div>
    )};
}

export default App;
