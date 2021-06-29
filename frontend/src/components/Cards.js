import React from 'react'
import { Card } from 'react-bootstrap'
import './cards.css'

const Cards = (props) => {
    return (
        <div style={{alignSelf:'flex-start', width:'fit-content'}} className="card-pos">
            <Card border='primary' style={{ width: '18rem', boxShadow: '5px 10px 20px 1px rgba(0, 0, 0,0.253)' }} className='m-3 rounded text-center' >
            <Card.Img className="card-image" src={props.src} variant='top' />
            <Card.Body>

                <Card.Title as='div'><strong>{props.name}</strong></Card.Title>

                <Card.Text as='div'>{props.body}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
export default Cards;