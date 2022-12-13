import React from "react";
import { motion } from 'framer-motion';
import { useState } from 'react'
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from "typewriter-effect";

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
            className="header-section flex">

            <Typewriter className="header-title"
                onInit={(typewriter)=> {
                    typewriter.typeString("Claire Biglands")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Your next Junior Developer")
                    .start();
                }}
                
            />
            <h1>About</h1>

        </motion.div>
    );
}