import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Message sent! (Demo only)');
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle">Have a project in mind or just want to say hi?</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-item">
                            <div className="icon-box">
                                <FaEnvelope />
                            </div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p>pvamsi5480@outlook.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="info-text">
                                <h3>Location</h3>
                                <p>Remote / Worldwide</p>
                            </div>
                        </div>

                        <div className="social-connect">
                            <h3>Connect with me</h3>
                            <div className="social-icons">
                                <a href="#" className="social-link"><FaGithub /></a>
                                <a href="#" className="social-link"><FaLinkedin /></a>
                                <a href="#" className="social-link"><FaTwitter /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </motion.form>
                </div>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Vamsi. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
