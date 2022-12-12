import React from "react";
import { motion } from 'framer-motion';
import { useState } from 'react'

export default function About() {
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
                        <h1>Header Section</h1>
                </motion.div>
    );
}