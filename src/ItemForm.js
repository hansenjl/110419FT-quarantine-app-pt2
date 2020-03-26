import React from 'react'
class ItemForm extends React.Component{

  state={
    name: "",
    price: "",
    image1: "",
    image2: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const requestObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: this.state })
    }

    fetch("http://localhost:3000/items", requestObj)
      .then(res => res.json())
      .then(item => {
        this.props.addToItems(item)
      })
  }

  render(){
    return (
      <div id="search-bar">
        <h2>Add a New Item:</h2>

          Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input><br/>
          Price: <input type="number" name="price" value={this.state.price} onChange={this.handleChange}></input><br/>
          Image 1 Link: <input type="text" name="image1" value={this.state.image1} onChange={this.handleChange}></input><br/>
          Image 2 Link: <input type="text" name="image2" value={this.state.image2} onChange={this.handleChange}></input><br/>
          <input type="submit" value="Create Item" onClick={this.handleSubmit}></input>


      </div>
    )
  }
}

export default ItemForm
