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
                        transition={{ duration: 0.3 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 } }}
                        className="flex tproject-row">

                        <div className="tproject-col-1">
                            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="tproject-carousel">
                               <Carousel.Item>
                                   <img
                                   className="d-block tproject-image"
                                   src={project1Image1}
                                   alt="First slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block tproject-image"
                                   src={project1Image2}
                                   alt="Second slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block tproject-image"
                                   src={project1Image3}
                                   alt="Third slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block tproject-image"
                                   src={project1Image3}
                                   alt="Fourth slide"
                                   />
                               </Carousel.Item>
                           </Carousel>
                        </div>

                        <div className="tproject-col-2">
                            <h3 className="project-title">Facility 443</h3>
                           
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
                           
                           <div className="project-card-links flex">
                               <FontAwesomeIcon icon={faGithub} className="project-link"/>
                               <FontAwesomeIcon icon={faDisplay} className="project-link"/>
                           </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 } }}
                        className="flex tproject-row">

                        <div className="tproject-col-1">
                            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="tproject-carousel">
                               <Carousel.Item>
                                   <img
                                   className="d-block tproject-image"
                                   src={project2Image1}
                                   alt="First slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block tproject-image"
                                   src={project2Image2}
                                   alt="Second slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block tproject-image"
                                   src={project2Image3}
                                   alt="Third slide"
                                   />
                               </Carousel.Item>
                               <Carousel.Item>
                                   <img
                                   className="d-block tproject-image"
                                   src={project2Image3}
                                   alt="Fourth slide"
                                   />
                               </Carousel.Item>
                           </Carousel>
                        </div>

                        <div className="tproject-col-2">
                            <h3 className="project-title">Facility 443</h3>
                           
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
                           
                           <div className="project-card-links flex">
                               <FontAwesomeIcon icon={faGithub} className="project-link"/>
                               <FontAwesomeIcon icon={faDisplay} className="project-link"/>
                           </div>
                        </div>
                    </motion.div>
        </section>    
    );
}