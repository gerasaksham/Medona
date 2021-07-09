import React, { Component } from 'react'
class Item extends Component {
    render() {
      return(
        <li style={{textAlign:'center'}}>
          {this.props.val}
        </li>
      )
    }
  
  }
  export default Item