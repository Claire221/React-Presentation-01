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
        <Container className="flex container">
            <h1>Projects</h1>
            <Row className="flex projects-row ">
                <Col className="flex projects-col"><Button onClick={() => showProject1(!project1)} className="my-4 project-btn">Project 1</Button></Col>
                <Col className="flex projects-col"><Button onClick={() => showProject2(!project2)} className="my-4 project-btn">Project 2</Button></Col>
                <Col className="flex projects-col"><Button onClick={() => showProject3(!project3)} className="my-4 project-btn">Project 3</Button></Col>
            </Row>
            <Row className="flex projects-row ">
                <Col className="flex projects-col">
                    {
                        project1?<Card className="project-card">
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
                <Col className="flex projects-col">
                    {
                        project2?<Card className="project-card">
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
                <Col className="flex projects-col">
                    {
                        project3?<Card className="project-card">
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
            </Row>
            </Container>
    );
}