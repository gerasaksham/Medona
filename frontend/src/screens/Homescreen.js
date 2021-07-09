import React, { Component } from 'react'
import Cards from '../components/Cards'
import { Row, Col, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mask from '../components/mask.jpg'
import med from '../components/med.jpg'
import block from '../components/block.jpg'
import About from '../components/aboutus'
import Footer from "../components/Footer"
import "../components/Footer.css"
import SearchBar from '../components/Searchbar'
import SearchResult from "../components/SearchResult";
import medicines from '../medicines'

class HomeScreen extends Component {
    constructor(props) {
        super();
        this.state = {
        data: medicines,
        appName: 'React Search Bar',
        list: undefined,
        }
    }
    searchData(e){
        var queryData = [];
        if(e.target.value !== '') {
          this.state.data.forEach(function(person) {
    
              if(person.name.toLowerCase().indexOf(e.target.value)!==-1) {
                if(queryData.length < 10) {
                  queryData.push(person.name);
                }
              }
          });
        }
        this.setState({list: queryData});
        //console.log(queryData)
      }
    render(){return (
        <>
            <SearchBar search={this.searchData.bind(this)}/>
            {(this.state.list) ? <SearchResult data={this.state.list} /> : null  }
            <CardDeck >
                <Row style={{ position: 'relative', left: '15%' }} >
                    <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
                        <Link to={'/stores'}>
                            <Cards src={med} name='Find a Medicine' body='Search for any medicine that you need' />
                        </Link>
                    </Col>
                    <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
                        <Cards src={mask} name='COVID Essentials ' body='Masks, Sanitizers, PPE Kits, Oxymeters and more...' />
                    </Col>
                    <Col sm={12} md={9} lg={6} xl={3} className="cardpad">
                        <Cards src={block} name='Blockchain' body='Authorised product details (Oxygen Cylinders, remdevsir, etc)' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <About />
                    </Col>
                </Row>


            </CardDeck >
            <div className='Foot'>
                <Footer />
            </div>

        </>
    )}
}
export default HomeScreen