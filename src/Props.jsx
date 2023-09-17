import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    return (
      <>
      <h1>{this.props.data1}</h1>
      <h1>{this.props.data2}</h1>
      </>
    )
  }
}
