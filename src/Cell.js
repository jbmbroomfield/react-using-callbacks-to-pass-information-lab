import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const props = this.props
    this.setState({
      color: props.selectedColor,
    })
  }
  
  render() {
    return (
      <div
        onClick={this.handleClick}
        className="cell"
        style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}