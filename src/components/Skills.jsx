import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaAngular, FaNodeJs, FaJava, FaDocker, FaAws
} from 'react-icons/fa';
import {
    SiSpringboot, SiPostgresql, SiKubernetes
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import './Skills.css';

const skillsData = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DAFB' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
                    <p className="section-subtitle">Technologies I work with</p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, translateY: -5 }}
                        >
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
