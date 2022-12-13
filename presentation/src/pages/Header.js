import React from "react";
import { motion } from 'framer-motion';
import { useState } from 'react'

import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 } }}
            className="header-section ">

            <Typewriter className="header-title"
                onInit={(typewriter)=> {
                    typewriter.typeString("Claire Biglands")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Your next Junior Developer")
                    .start();
                }}
                
            />
            <div className="header-links-div flex">
                <FontAwesomeIcon icon={faGithub} className="header-link"/>
                <FontAwesomeIcon icon={faLinkedin} className="header-link"/>
            </div>

        </motion.div>
    );
}