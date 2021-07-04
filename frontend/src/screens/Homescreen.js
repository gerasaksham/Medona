import React from 'react'
import Cards from '../components/Cards'
import { Row, Col, CardDeck } from 'react-bootstrap'
import Searchbar from '../components/Searchbar'
//import '../components/Searchbar.css'
import mask from '../components/mask.jpg'
import med from '../components/med.jpg'
import block from '../components/block.jpg'
import About from '../components/aboutus'
const HomeScreen = () => {
    return ( 
    <>
        <Searchbar / >
            <CardDeck >
                <Row style = {{ position: 'relative', left: '15%'} } >
                    <Col sm = { 12 } md = { 9 } lg = { 6 } xl = { 3 } className="cardpad">
                        <Cards src={med} name = 'Find a Medicine' body = 'Search for any medicine that you need' / >
                    </Col> 
                    <Col sm = { 12 } md = { 9 } lg = { 6 } xl = { 3 } className="cardpad">
                        <Cards src={mask} name = 'COVID Essentials 'body = 'Masks, Sanitizers, PPE Kits, Oxymeters and more...' / >
                    </Col> 
                    <Col sm = { 12 } md = { 9 } lg = { 6 } xl = { 3 } className="cardpad">
                        <Cards src={block} name = 'Blockchain' body = 'Authorised product details (Oxygen Cylinders, remdevsir, etc)' / >
                    </Col> 
                </Row>

            </CardDeck > 
            <About/>
     </>
    )
}
export default HomeScreen