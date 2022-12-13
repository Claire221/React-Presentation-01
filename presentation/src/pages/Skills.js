import React from "react";
import { motion } from 'framer-motion';
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Skills() {
    return (
        <section className="my-5 skills-section  section-styles">
        <Container>
            <h1 className="about-title">Coding Languages</h1>
            <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 } }}
                    className="">
                    <Row>
                        <Col className="skills-col flex">
                             <div className="skills-content-div">
                                <p className="skills-div-title">Languages</p>
                                <ul className="skills-div-ul">
                                    <li className="skills-div-li">HTML <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                    <li className="skills-div-li">CSS <FontAwesomeIcon icon={faGithub} className="kill-icon"/></li>
                                    <li className="skills-div-li">JavaScript <FontAwesomeIcon icon={faGithub} className="kill-icon"/></li>
                                    <li className="skills-div-li">Python <FontAwesomeIcon icon={faGithub} className="kill-icon"/></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="skills-col flex">
                             <div className="skills-content-div">
                                <p className="skills-div-title">Databases</p>
                                <ul className="skills-div-ul">
                                    <li className="skills-div-li">MongoDB <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                    <li className="skills-div-li">PostgreSQL <FontAwesomeIcon icon={faGithub} className="kill-icon"/></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="skills-col flex">
                             <div className="skills-content-div">
                                <p className="skills-div-title">Frameworks and Libraries</p>
                                <ul className="skills-div-ul">
                                    <li className="skills-div-li">Jinja <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                    <li className="skills-div-li">React <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                    <li className="skills-div-li">JQuery <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                    <li className="skills-div-li">Flask <FontAwesomeIcon icon={faGithub} className="kill-icon"/></li>
                                    <li className="skills-div-li">Bootstrap <FontAwesomeIcon icon={faGithub} className="kill-icon"/></li>
                                    <li className="skills-div-li">Materialize <FontAwesomeIcon icon={faGithub} className="kill-icon"/></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="skills-col flex">
                             <div className="skills-content-div">
                                <p className="skills-div-title">Version Control</p>
                                <ul className="skills-div-ul">
                                    <li className="skills-div-li">Github <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                    <li className="skills-div-li">Git <FontAwesomeIcon icon={faGithub} className="skill-icon"/></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
            </motion.div>
        
        </Container>
     </section>

    );
}