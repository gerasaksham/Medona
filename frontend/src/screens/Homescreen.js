import React from 'react'
import Cards from '../components/Cards'
import { Row, Col, CardDeck } from 'react-bootstrap'
import './Homescreen.css'

const HomeScreen = () => {
    return (
        <CardDeck >
            <Row >
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Cards name='Find a Med' body='sample text sample text sample text' />
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Cards name='COVID Essentials' body='Already dead' />
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Cards name='Blockchain' body='Ye to humse banega hi nhi' />
                </Col>
            </Row>

        </CardDeck >
    )
}
export default HomeScreen