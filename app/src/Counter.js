import React from 'react';
import { render } from 'react-dom';

export class Counter extends React.Component {

  constructor (){
    super()
    this.state = {
      count: 0
    }
  }
  handleClick(){
    this.setState({
      count: this.state.count + 1
    })
  }
  render (){
    return(
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    )
  }
}

