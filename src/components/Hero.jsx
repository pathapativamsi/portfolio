import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="greeting">Hello, I'm</h2>
                    <h1 className="name gradient-text">vamsi</h1>
                    <h3 className="role">Full Stack Developer</h3>
                    <p className="description">
                        Building scalable web applications with modern technologies.
                        Specialized in React, Node.js, Spring Boot, and Cloud Architecture.
                    </p>

                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Work <FaArrowRight className="icon" />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="circle-gradient"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
