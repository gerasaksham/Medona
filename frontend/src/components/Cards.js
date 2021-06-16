import React from 'react'
import { Card } from 'react-bootstrap'
import img1 from './image.png'
import './cards.css'

const Cards = (props) => {
    return (
        <Card border='secondary' style={{ width: '18rem', boxShadow: '5px 10px 20px 1px rgba(0, 0, 0,0.253)' }} className='m-3 rounded text-center' >
            <Card.Img src={img1} variant='top' />
            <Card.Body>

                <Card.Title as='div'><strong>{props.name}</strong></Card.Title>

                <Card.Text as='div'>{props.body}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Cards