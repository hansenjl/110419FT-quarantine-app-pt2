import React from 'react'

class Countdown extends React.Component{

  state = {
    countdown: 60,
    interval: null
  }

  componentDidMount(){
    let interval = setInterval(this.countDown, 1000)
    //this.setState({interval: interval})
    this.setState({interval})
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  countDown = () => {
    console.log(this.state.countdown)
    this.setState(prevState => {
      return {countdown: prevState.countdown - 1}
    })
  }

  render(){
    return(  <h2>You have {this.state.countdown} seconds to checkout</h2> )
  }
}

export default Countdown
