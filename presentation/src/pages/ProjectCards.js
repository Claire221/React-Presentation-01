import { motion } from 'framer-motion';
import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ProjectCards() {
    const [project1IsOpen, project1SetIsOpen] = useState(false);
    const [project2IsOpen, project2SetIsOpen] = useState(false);
    const [project3IsOpen, project3SetIsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 } }}
            className="header-section section">
                       
            <Container className="flex container section">
                <Row className="flex projects-row ">
                    <Col className="flex projects-col ">
                        <motion.div transition={{layout:{duration: 0.5, type: "spring"}}} layout onClick={() => project1SetIsOpen(!project1IsOpen)} className="card">
                        <motion.h2 layout="position">Project 1</motion.h2>
                            {project1IsOpen && 
                                <motion.div >
                                    <p>ke a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh</p>
                                    <p>ke a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                                </motion.div>
                            }
                        </motion.div>
                    </Col>
                </Row>
                <Row className="flex projects-row">
                    <Col className="flex projects-col">
                        <motion.div transition={{layout:{duration: 0.5, type: "spring"}}} layout onClick={() => project2SetIsOpen(!project2IsOpen)} className="card">
                            <motion.h2 layout="position">Project 1</motion.h2>
                            {project2IsOpen && 
                                <motion.div >
                                    <p>ke a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh</p>
                                    <p>ke a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                                </motion.div>
                            }
                        </motion.div>
                    </Col>
                </Row>
                <Row className="flex projects-row ">
                    <Col className="flex projects-col">
                        <motion.div transition={{layout:{duration: 0.5, type: "spring"}}} layout onClick={() => project3SetIsOpen(!project3IsOpen)} className="card">
                            <motion.h2 layout="position">Project 1</motion.h2>
                            {project3IsOpen && 
                                <motion.div >
                                    <p>ke a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sh</p>
                                    <p>ke a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                                </motion.div>
                            }
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
        
    )
}
