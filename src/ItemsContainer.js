import React from 'react'
import Item from './Item'
import ItemForm from './ItemForm'
import {Route, Switch} from 'react-router-dom'

class ItemsContainer extends React.Component{

  isInCart(id) {
    return this.props.cart.find(item => item.id === id) ? true : false
  }

  render(){
    return(
      <div id="items-container">
        <Switch>
          <Route exact path='/items/new' render={() => <ItemForm addToItems={this.props.addToItems}/>} />
          <Route exact path='/items/:id' component={({match} ) => <Item item={this.props.items.find(i => i.id == match.params.id)} addToCart={this.props.addToCart} isInCart={this.isInCart(match.params.id)}/>}/>
          <Route exact path='/items' render={() => <div>{this.props.items.map((item) => <Item key={item.id} item={item} addToCart={this.props.addToCart} isInCart={this.isInCart(item.id)}/>)}</div>}/>
        </Switch>
      </div>
    )
  }
}

export default ItemsContainer
