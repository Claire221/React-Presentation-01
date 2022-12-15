import React, {useState} from "react";
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

export default function Project2() {
    const [project1, showProject1] = useState(null)
    const [project2, showProject2] = useState(null)
    const [project3, showProject3] = useState(null)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (

        <section className="section-styles">
                <h1 className="section-title">Projects</h1>
                <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 } }}
                        className="flex project-row card-styles">

                        <div className="project-col-1">
                        <Col className="flex projects-col"><Button onClick={() => showProject1(!project1)} className="my-4 project-btn">View Images</Button></Col>
                            {
                                project1?<Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="project-carousel">
                                    <Carousel.Item>
                                        <img
                                        className="d-block project-image-sm"
                                        src={project1Image1}
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block project-image"
                                        src={project1Image2}
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block project-image"
                                        src={project1Image3}
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block project-image"
                                        src={project1Image3}
                                        alt="Fourth slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>: null
                            }
                        </div>

                        <div className="project-col-2">
                            <div className="flex project-card-header project-card-header-sm">
                                <h3 className="project-title">Facility 443</h3>
                                <div className="project-card-links flex">
                                    <FontAwesomeIcon icon={faGithub} className="project-link"/>
                                    <FontAwesomeIcon icon={faDisplay} className="project-link"/>
                                </div>
                            </div>

                           <h4 className="project-text"><span className="project-sub-title">Project Brief: </span>Create a website that includes an interactive JavaScript element.</h4>

                           <h4 className="project-text"><span className="project-sub-title">Languages Used: </span>HTML, CSS, JavaScript</h4>

                           <h4 className="project-sub-title">Project features</h4>
                           <ListGroup variant="flush" className="project-card-list">
                               <ListGroup.Item className="project-card-li">Background Music</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Sound Effects</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Interactive Storyline</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Visual Inventory System</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Checkpoint Systems</ListGroup.Item>
                           </ListGroup>
                           
                           <h4 className="project-text"><span className="project-sub-title">Project Difficulties: </span>Button click events were bubbling</h4>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 } }}
                        className="flex project-row card-styles">

                        <div className="project-col-1">
                            <Col className="flex">
                                <Button onClick={() => showProject2(!project2)} className="my-4 project-btn">View Images</Button>
                            </Col>
                                {
                                    project2?<Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="project-carousel">
                                        <Carousel.Item>
                                            <img
                                            className="d-block project-image-sm"
                                            src={project2Image1}
                                            alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block project-image-sm"
                                            src={project2Image2}
                                            alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block project-image-sm"
                                            src={project2Image3}
                                            alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block project-image-sm"
                                            src={project2Image4}
                                            alt="Fourth slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>: null
                                }
                        </div>

                        <div className="project-col-2">
                        <div className="flex project-card-header  project-card-header-sm">
                                <h3 className="project-title">Bookmarked</h3>
                                <div className="project-card-links flex">
                                    <FontAwesomeIcon icon={faGithub} className="project-link"/>
                                    <FontAwesomeIcon icon={faDisplay} className="project-link"/>
                                </div>
                            </div>
                           
                           <h4 className="project-text"><span className="project-sub-title">Project Brief: </span>Create an application that has CRUD functionality</h4>

                           <h4 className="project-text"><span className="project-sub-title">Languages Used: </span>HTML, CSS, Python, Flask, Jinja, MongoDB, PostgreSQL, Heroku</h4>

                           <h4 className="project-sub-title">Project features</h4>
                           <ListGroup variant="flush" className="project-card-list">
                           <ListGroup.Item className="project-card-li">Account Creation</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Login and Logout</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Create and Delete Bookshelves</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Create, Edit and Delete Books</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Assign Books to Bookshelves</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Book Search</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Book Generation</ListGroup.Item>
                           </ListGroup>
                           
                           <h4 className="project-text"><span className="project-sub-title">Project Difficulties: </span>Button click events were bubbling</h4>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 } }}
                        className="flex project-row card-styles">

                        <div className="project-col-1">
                        <Col className="flex projects-col">
                            <Button onClick={() => showProject3(!project3)} className="my-4 project-btn">View Images</Button>
                        </Col>
                            {
                                project3?<Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="project-carousel">
                                    <Carousel.Item>
                                        <img
                                        className="d-block project-image-sm"
                                        src={project3Image1}
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block project-image-sm"
                                        src={project3Image2}
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block project-image-sm"
                                        src={project3Image3}
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block project-image-sm"
                                        src={project3Image4}
                                        alt="Fourth slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>: null
                            }
                            
                        </div>

                        <div className="project-col-2">
                            <div className="flex project-card-header project-card-header-lg">
                                <h3 className="project-title">Across the Ages - Project Ongoing </h3>
                                <div className="project-card-links project-card-linkslg flex">
                                    <FontAwesomeIcon icon={faGithub} className="project-link"/>
                                    <FontAwesomeIcon icon={faDisplay} className="project-link"/>
                                </div>
                            </div>
                            
                           
                           <h4 className="project-text"><span className="project-sub-title">Project Brief: </span>Create an E-Commerce website with payment functionality</h4>

                           <h4 className="project-text"><span className="project-sub-title">Languages Used: </span>HTML, CSS, Python, Django, Stripe</h4>

                           <h4 className="project-sub-title">Project features</h4>
                           <ListGroup variant="flush" className="project-card-list">
                           <ListGroup.Item className="project-card-li">Login and Out Features</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Prodcut Search</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Product Display</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">You might also like</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Add to Basket</ListGroup.Item>
                               <ListGroup.Item className="project-card-li">Checkout</ListGroup.Item>
                           </ListGroup>
                           
                           <h4 className="project-text"><span className="project-sub-title">Project Difficulties: </span>Button click events were bubbling</h4>
                        
                        </div>
                    </motion.div>
        </section>    
    );
}