import React from 'react'
import { Button, Card } from 'react-bootstrap'
const About = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Card border='info' style={{ width: '73%', left: '16%', marginTop: '5%' }} className="text-center">
                <Card.Header as="h3" style={{ fontFamily: 'sans-serif', fontWeight: '600', color: "#00008B" }}>About Us</Card.Header>
                <Card.Body>
                    <Card.Title><i style={{ fontWeight: '500', marginBottom: '20px', position: 'relative' }}>Medona</i> - For your medicinal needs.</Card.Title>
                    <Card.Text>
                        <p style={{ marginTop: '2%' }}>On taking the account of shortage of medicines in the market, we have built a website in which user can enter the details
                            of required drug and within a certain radius of his/her location, the system will fetch a list of all pharmacies and hospitals in
                            which that particular drug is available along with the contact details and opening hours of the store. With this website people
                            won't have to go to different stores amidst lockdown to find a drug. </p>
                        <p>We have implemented a blockchain system for the important drugs like remdisivir and oxygen cylinders to prevent the black marketing.</p>
                    </Card.Text>
                    <Button variant="info">Login to continue &gt;&gt; </Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    )
}
export default About