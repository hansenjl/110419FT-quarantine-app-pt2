import React, {Component } from 'react'

class ItemShow extends Component{


renderItem = (item) => {
    debugger
    if(item) {
    return(
        <div className="item" id={item.name + "-item"}>
          <h3>{item.name}</h3>
          <img alt={item.name + " image"}src={item.image1}/>
          <br/>
          Price: {item.price}
          <br/>
       </div>
      )
    }
}


render(){
    const item = this.props.items.find(item => item.id == this.props.id)
    return(
       <div>
        { this.renderItem(item)}
      </div>
    )
  }

}
export default ItemShow
