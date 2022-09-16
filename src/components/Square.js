import React, { Component } from 'react'

 class Square extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        }
    }
  render() {
    return (
      <div
       className='square'
       onClick={() => this.setState({value: `X`})}>
        <div>{this.state.value}</div>
      </div>
    )
  }
}

export default Square;