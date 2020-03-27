import React, {Component } from 'react'

class Item extends Component{

  shouldComponentUpdate(nextProps, nextState){
    console.log("Checking if component should update");
    return nextProps.isInCart !== this.props.isInCart
  }

  componentDidUpdate(){
    console.log("UPDATED!")
  }


  renderItem = () => {
    if(!!this.props.item){
      return(
        <div className="item" id={this.props.item.name + "-item"}>
          <h3>{this.props.item.name}</h3>
          <img alt={this.props.item.name + " image"}src={this.props.item.image1}/>
          <br/>
          Price: {this.props.item.price}
          <br/>
          {!this.props.isInCart && <button onClick={(e) => this.props.addToCart(this.props.item.id)}>Add To Cart</button>}
        </div>
      )
      } else {
        return(
          <div>LOADING</div>
        )
      }
    }


  render(){
    return(
      <>
      {this.renderItem()}
      </>
    )
  }

}
export default Item
