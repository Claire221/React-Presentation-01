import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    const [project1, showProject1] = useState(null)
    const [project2, showProject2] = useState(null)
    const [project3, showProject3] = useState(null)
    return (
        <Container>
            <h1>Projects</h1>
            <Row>
                <Col>
                    <Button onClick={() => showProject1(!project1)}>Project 1</Button>
                    {
                        project1?<Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>: null
                    }
                </Col>
                <Col>
                    <Button onClick={() => showProject2(!project2)}>Project 2</Button>
                    {
                        project2?<h1>Project2</h1> : null
                    }
                </Col>
                <Col>
                    <Button onClick={() => showProject3(!project3)}>Project 3</Button>
                    {
                        project3?<h1>Project3</h1> : null
                    }
                </Col>
            </Row>
            </Container>
    );
}