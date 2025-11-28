import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
    {
        title: 'Senior Full Stack Developer',
        company: 'Open Text',
        date: '2024 - Present',
        description: 'Leading development of scalable web applications using React, Node.js, and AWS. Architected microservices using Spring Boot and Kubernetes.',
    },
    {
        title: 'Full Stack Developer',
        company: 'Thomson Reuters',
        date: '2021 - 2024',
        description: 'Developed responsive frontend interfaces with Angular and robust backend APIs with Java. Managed PostgreSQL databases and Docker containers.',
    },
    {
        title: 'Software Engineer',
        company: 'Tata Consultancy services',
        date: '2018 - 2021',
        description: 'Developed enterprise applications using Java and Spring Boot. Worked on microservices architecture and implemented CI/CD pipelines.',
    },
];

const projectsData = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart, payment gateway, and admin dashboard.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
        links: { demo: '#', code: '#' }
    },
    {
        title: 'Task Management System',
        description: 'Collaborative project management tool with real-time updates and team features.',
        tags: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
        links: { demo: '#', code: '#' }
    },
    {
        title: 'Cloud Infrastructure Dashboard',
        description: 'Monitoring dashboard for AWS resources with data visualization.',
        tags: ['React', 'AWS', 'D3.js', 'Serverless'],
        links: { demo: '#', code: '#' }
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">

                {/* Experience Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
                </motion.div>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-date">
                                    <FaCalendarAlt /> {item.date}
                                </div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <h4 className="timeline-company">{item.company}</h4>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                            <div className="timeline-dot">
                                <FaBriefcase />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Projects Grid */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-header"
                    style={{ marginTop: '5rem' }}
                >
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                </motion.div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.links.code} className="icon-link"><FaGithub /> Code</a>
                                    <a href={project.links.demo} className="icon-link"><FaExternalLinkAlt /> Live Demo</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div> */}

            </div>
        </section>
    );
};

export default Experience;
