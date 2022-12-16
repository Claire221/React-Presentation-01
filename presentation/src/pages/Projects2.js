import React, {useState} from "react";
import ImageGallery from 'react-image-gallery';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion';


import project1Image1 from "../images/facility443-01.jpg"
import project1Image2 from "../images/facility443-02.jpg"
import project1Image3 from "../images/facility443-03.jpg"
import project1Image4 from "../images/facility443-04.jpg"

import project2Image1 from "../images/bookmarked-01.jpg"
import project2Image2 from "../images/bookmarked-02.jpg"
import project2Image3 from "../images/bookmarked-03.jpg"
import project2Image4 from "../images/bookmarked-04.jpg"

import project3Image1 from "../images/ATA-01.jpg"
import project3Image2 from "../images/ATA-02.jpg"
import project3Image3 from "../images/ATA-03.jpg"
import project3Image4 from "../images/ATA-04.jpg"

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

export default function ProjectTwo() {
    const [project1, showProject1] = useState(null)
    const [project2, showProject2] = useState(null)
    const [project3, showProject3] = useState(null)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (

        <section className="section-styles">

            <Container className="flex container projects-container">
                <h1 className="section-title">Projects</h1>
                <Row className="flex projects-row projects-btn-row ">
                    <Col className="flex projects-col"><Button onClick={() => showProject1(!project1)} className="my-4 project-btn">Facility 443</Button></Col>
                    <Col className="flex projects-col"><Button onClick={() => showProject2(!project2)} className="my-4 project-btn">Bookmarked</Button></Col>
                    <Col className="flex projects-col"><Button onClick={() => showProject3(!project3)} className="my-4 project-btn">Across The Ages</Button></Col>
                </Row>
                <Row className="flex projects-row project-cards-row">
                    <Col className="flex projects-info-col">
                        {
                           project1?<Card className="project-card flex">
                             <ImageGallery items={images}/>
                           <Card.Body>
                           <Card.Title className="project-title">Facility 443 </Card.Title>
                           
                           <Card.Title className="project-text"><span className="project-sub-title">Project Brief: </span>Create a website that includes an interactive JavaScript element.</Card.Title>

                           <Card.Title className="project-text"><span className="project-sub-title">Languages Used: </span>HTML, CSS, JavaScript</Card.Title>

                           <Card.Title className="project-sub-title">Project features</Card.Title>
                           <ListGroup variant="flush" className="project-card-list">
                               <ListGroup.Item className="project-card-li">Background Music</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Sound Effects</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Interactive Storyline</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Visual Inventory System</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Checkpoint Systems</ListGroup.Item>
                           </ListGroup>
                           
                           <Card.Title className="project-text"><span className="project-sub-title">Project Difficulties: </span>Button click events were bubbling</Card.Title>
                           
                           <div className="project-card-links flex">
                               <FontAwesomeIcon icon={faGithub} className="project-link"/>
                               <FontAwesomeIcon icon={faDisplay} className="project-link"/>
                           </div>
                               </Card.Body>
                           </Card>: null
                        }
                    </Col>
                </Row>
                <Row className="flex projects-row ">
                    <Col className="flex projects-col">
                        {
                           project2?<Card className="project-card">
                           <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                               <Carousel.Item>
                                   <img
                                   className="d-block project-image"
                                   src={project2Image1}
                                   alt="First slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block project-image-small"
                                   src={project2Image2}
                                   alt="Second slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block project-image-small"
                                   src={project2Image3}
                                   alt="Third slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block project-image-small"
                                   src={project2Image4}
                                   alt="Fourth slide"
                                   />
                               </Carousel.Item>
                           </Carousel>
                           <Card.Body>
                           <Card.Title className="project-title">Bookmarked</Card.Title>
                           
                           <Card.Title className="project-text"><span className="project-sub-title">Project Brief: </span>Create an application that has CRUD functionality</Card.Title>

                           <Card.Title className="project-text"><span className="project-sub-title">Languages Used: </span>HTML, CSS, Python, Flask, Jinja, MongoDB, PostgreSQL, Heroku</Card.Title>

                           <Card.Title className="project-text"><span className="project-sub-title">Project features</span>Account Creation, Login and Logout, Create and Delete Bookshelves, Create, Edit and Delete Books, Assign Books to Bookshelves, Book Search, Book Generation</Card.Title>
                           
                           {/* <ListGroup variant="flush" className="project-card-list">
                               <ListGroup.Item className="project-card-li">Account Creation</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Login and Logout</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Create and Delete Bookshelves</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Create, Edit and Delete Books</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Assign Books to Bookshelves</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Book Search</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Book Generation</ListGroup.Item>
                           </ListGroup> */}
                           
                           <Card.Title className="project-text"><span className="project-sub-title">Project Difficulties: </span></Card.Title>
                           
                           <div className="project-card-links flex">
                               <FontAwesomeIcon icon={faGithub} className="project-link"/>
                               <FontAwesomeIcon icon={faDisplay} className="project-link"/>
                           </div>
                               </Card.Body>
                           </Card>: null
                        }
                    </Col>
                </Row>
                <Row className="flex projects-row ">
                    <Col className="flex projects-col">
                        {
                           project3?<Card className="project-card">
                           <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                               <Carousel.Item>
                                   <img
                                   className="d-block project-image-small"
                                   src={project3Image1}
                                   alt="First slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block project-image-small"
                                   src={project3Image2}
                                   alt="Second slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block project-image-small"
                                   src={project3Image3}
                                   alt="Third slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block project-image-small"
                                   src={project3Image4}
                                   alt="Fourth slide"
                                   />
                               </Carousel.Item>
                           </Carousel>
                           <Card.Body>
                           <Card.Title className="project-title">Across the Ages - Project Ongoing</Card.Title>
                           
                           <Card.Title className="project-text"><span className="project-sub-title">Project Brief: </span>Create an E-Commerce website with payment functionality</Card.Title>

                           <Card.Title className="project-text"><span className="project-sub-title">Languages Used: </span>HTML, CSS, Python, Django, Stripe</Card.Title>

                           <Card.Title className="project-sub-title">Project features</Card.Title>
                           <ListGroup variant="flush" className="project-card-list">
                               <ListGroup.Item className="project-card-li">Login and Out Features</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Prodcut Search</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Product Display</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">You might also like</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Add to Basket</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Checkout</ListGroup.Item>
                           </ListGroup>
                           
                           <Card.Title className="project-text"><span className="project-sub-title">Project Difficulties: </span>Button click events were bubbling</Card.Title>
                           
                           <div className="project-card-links flex">
                               <FontAwesomeIcon icon={faGithub} className="project-link"/>
                               <FontAwesomeIcon icon={faDisplay} className="project-link"/>
                           </div>
                               </Card.Body>
                           </Card>: null
                        }
                    </Col>
                </Row>
            </Container>
        </section>    
    );
}