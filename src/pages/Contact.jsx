import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate form submission
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="hero" style={{
                height: '50vh',
                minHeight: '350px',
                background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2670&auto=format&fit=crop") center/cover no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '60px'
            }}>
                <div className="container text-center" style={{ color: 'white' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', color: "#F4F1DE" }}>Get in Touch</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, color: "#F4F1DE" }}>We’d love to hear from you.</p>
                </div>
            </section>

            <div className="section">
                <div className="container" style={{ paddingBottom: '60px' }}>
                    <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                        {/* Contact Info (Left Side) */}
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's Chat</h2>
                            <p style={{ color: '#666', marginBottom: '40px', lineHeight: 1.6, fontSize: '1.05rem' }}>
                                Typically reply within 24 hours. Whether you have a question about shipping, a custom order request, or just want to share your love for handicrafts, we're here.
                            </p>

                            <div className="contact-methods">
                                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: '#fff0eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Phone</h4>
                                        <p style={{ color: '#666' }}>+91 98765 43210</p>
                                        <p style={{ fontSize: '0.85rem', color: '#888' }}>Mon-Fri 9am-6pm</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: '#fff0eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Email</h4>
                                        <p style={{ color: '#666' }}>hello@handicraft.com</p>
                                        <p style={{ fontSize: '0.85rem', color: '#888' }}>Online Support</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: '#fff0eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Studio</h4>
                                        <p style={{ color: '#666' }}>123 Artisan Lane, Jaipur</p>
                                        <p style={{ fontSize: '0.85rem', color: '#888' }}>Rajasthan, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form (Right Side) */}
                        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                            {submitted ? (
                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)', minHeight: '400px', textAlign: 'center' }}>
                                    <div style={{ width: '80px', height: '80px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <Send size={40} color="green" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Message Sent!</h3>
                                    <p style={{ color: '#666' }}>Thank you for reaching out. We will get back to you shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ marginTop: '30px' }}>Send Another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3 style={{ marginBottom: '25px', fontSize: '1.5rem' }}>Send us a Message</h3>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem', color: '#555' }}>Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '15px', borderRadius: '6px', border: '1px solid #eee', outline: 'none', backgroundColor: '#fdfdfd', fontSize: '1rem', transition: 'border 0.3s' }}
                                            placeholder="John Doe"
                                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                            onBlur={(e) => e.target.style.borderColor = '#eee'}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem', color: '#555' }}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '15px', borderRadius: '6px', border: '1px solid #eee', outline: 'none', backgroundColor: '#fdfdfd', fontSize: '1rem', transition: 'border 0.3s' }}
                                            placeholder="john@example.com"
                                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                            onBlur={(e) => e.target.style.borderColor = '#eee'}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '30px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem', color: '#555' }}>Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            style={{ width: '100%', padding: '15px', borderRadius: '6px', border: '1px solid #eee', outline: 'none', backgroundColor: '#fdfdfd', fontSize: '1rem', transition: 'border 0.3s', resize: 'vertical' }}
                                            placeholder="How can we help you today?"
                                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                            onBlur={(e) => e.target.style.borderColor = '#eee'}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px' }}>
                                        Send Message <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
