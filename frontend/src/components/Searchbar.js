
import React, { Component } from 'react'
//import medicines from '../medicines'

class SearchBar extends Component  {
  

  render() {
    return(
      <div>
        <h3 style={{textAlign:'center', padding:'1.5%', fontWeight:'500', color:'#00008B'}}>FIND A MEDICINE</h3>
        <input style={{marginLeft:'20%',width:'60%',padding:'10px',marginBottom:'2%', borderColor:'#00008B',borderRadius:'10px'}} onChange={this.props.search} placeholder="Search Medicine"/>
      </div>
    )
  }
}
export default SearchBar 