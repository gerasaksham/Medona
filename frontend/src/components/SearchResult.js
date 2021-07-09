import React, { Component } from 'react'
import{ Link }from 'react-router-dom'
import Item from './item'
class SearchResult extends Component {
  
    render() {
      return (
        <div>
          <ul style={{alignItems:'center',textAlign:'center', color:'#00008B',fontWeight:'500', listStyleType:'none'}}>
            <Link>{this.props.data.map(function(value) {
                return <Item key={value} val={value} />
            })}
            {console.log(this.props.data)}
            </Link>
          </ul>
        </div>
      )
  
    }
  
  }
export default SearchResult