import React from "react";
import { motion } from 'framer-motion';
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faHtml5, faCss3, faJs, faPython, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faH, faDatabase, faPepperHot, faM} from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Skills() {
    return (
        <section className="section-styles">
        <Container className="skills-container">
            <h1 className="section-title">Coding Languages</h1>
            <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 } }}
                    className="skills-div">
                   
                    <Row className="skills-row flex">
                        <Col className="skills-col">
                            <Card className="skills-card">
                                <Card.Header className="py-3 skills-card-title">Languages</Card.Header>
                                <Card.Body>
                                    <ul className="skills-div-ul">
                                        <li className="skills-div-li">HTML <FontAwesomeIcon icon={faHtml5} className="skill-icon"/></li>
                                        <li className="skills-div-li">CSS <FontAwesomeIcon icon={faCss3} className="skill-icon"/></li>
                                        <li className="skills-div-li">JavaScript <FontAwesomeIcon icon={faJs} className="skill-icon"/></li>
                                        <li className="skills-div-li">Python <FontAwesomeIcon icon={faPython} className="skill-icon"/></li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="skills-col">
                            <Card className="skills-card">
                                <Card.Header className="py-3 skills-card-title">Libraries and Frameworks</Card.Header>
                                <Card.Body>
                                    <ul className="skills-div-ul">
                                        <li className="skills-div-li">Jinja <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                        <li className="skills-div-li">React <FontAwesomeIcon icon={faReact} className="skill-icon"/></li>
                                        <li className="skills-div-li">Flask <FontAwesomeIcon icon={faPepperHot} className="skill-icon"/></li>
                                        <li className="skills-div-li">Bootstrap <FontAwesomeIcon icon={faBootstrap} className="skill-icon"/></li>
                                        <li className="skills-div-li">Materialize <FontAwesomeIcon icon={faM} className="skill-icon"/></li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="skills-col">
                            <Card className="skills-card">
                                <Card.Header className="py-3 skills-card-title">Databases</Card.Header>
                                <Card.Body>
                                    <ul className="skills-div-ul">
                                        <li className="skills-div-li">MongoDB <FontAwesomeIcon icon={faDatabase} className="skill-icon"/></li>
                                        <li className="skills-div-li">PostgreSQL <FontAwesomeIcon icon={faDatabase} className="skill-icon"/></li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="skills-col">
                            <Card className="skills-card">
                                <Card.Header className="py-3 skills-card-title">Version Control</Card.Header>
                                <Card.Body>
                                        <ul className="skills-div-ul">
                                            <li className="skills-div-li">Github <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                            <li className="skills-div-li">Git <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                        </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>                    
            </motion.div>
        
        </Container>
     </section>

    );
}