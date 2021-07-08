import React from 'react'
import Cards from '../components/Cards'
import { Row, Col, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
//import '../components/Searchbar.css'
import mask from '../components/mask.jpg'
import med from '../components/med.jpg'
import block from '../components/block.jpg'
import About from '../components/aboutus'
import Footer from "../components/Footer"
import "../components/Footer.css"

const HomeScreen = () => {
    return (
        <>
            <Searchbar />
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
    )
}
export default HomeScreen