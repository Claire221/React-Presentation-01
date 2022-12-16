import React from "react";
import { motion } from 'framer-motion';
import { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About() {

    return (
        <section className="mt-5 mb-20 section-styles">
            <Container className="about-container">
                <h1 className="section-title">My Coding Journey</h1>
                <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 } }}
                        className="">
                        <Row className="about-row card-styles">
                            <Col className="about-col flex">
                                <div className="about-image-div flex">
                                    <img src="https://img.freepik.com/premium-vector/cartoon-urban-cityscape-with-college-academy-students-university-architecture-background_212168-968.jpg?w=2000" class="about-image" alt="Responsive image"></img>
                                </div>
                                 <div className="about-content-div about-content-right flex">
                                    <p className="about-div-title">Graduate University</p>
                                    <ul className="about-div-ul">
                                        <li className="about-div-li">Graduated in 2018</li>
                                        <li className="about-div-li">Unsure of what career to persue</li>
                                        <li className="about-div-li">Started Looking at different careers in IT</li>
                                        <li className="about-div-li">Came across Web Development</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                </motion.div>
                
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 } }}
                    className="">
                        <Row className="about-row card-styles">
                            <Col className="about-col flex">
                                <div className="about-content-div about-content-left flex">
                                    <p className="about-div-title">IT Apprenticeship</p>
                                    <ul className="about-div-ul">
                                        <li className="about-div-li">Learnt how to fix and install computers</li>
                                        <li className="about-div-li">Learnt how to install networks</li>
                                        <li className="about-div-li">Progressed onto a full time position</li>
                                        <li className="about-div-li">Issue with training</li>
                                    </ul>
                                </div>
                                <div className="about-image-div flex">
                                    <img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg" class="about-image" alt="Responsive image"></img>
                                    </div>
                            </Col>
                        </Row>     
                </motion.div>
                
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 } }}
                    className="">
                    <Row className="about-row card-styles">
                        <Col className="about-col flex">
                            <div className="about-image-div flex">
                                <img src="https://cdn5.vectorstock.com/i/1000x1000/27/84/programming-development-using-pc-and-it-technology-vector-36542784.jpg" class="about-image" alt="Responsive image"></img>
                            </div>
                            <div className="about-content-div about-content-right flex">
                                <p className="about-div-title">Coding Bootcamp</p>
                                <ul className="about-div-ul">
                                    <li className="about-div-li">Enrolled in coding bootcamp</li>
                                    <li className="about-div-li">Left my job to persue it full time</li>
                                    <li className="about-div-li">Developed my existing skills and learnt new languages</li>
                                    <li className="about-div-li">Hoping to finish in January</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
         </section>

        
    );
}