import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const { products } = useShop();
    const featuredProducts = products.slice(0, 6);

    return (
        <div className="home-page">
            <header className="hero" style={{
                minHeight: '80vh',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
                backgroundAttachment: 'fixed',
                padding: '60px 0'
            }}>
                <div className="container text-center" style={{ color: 'white' }}>
                    <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '20px', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Authentic Indian Handicrafts</h1>
                    <p className="hero-subtitle" style={{ fontSize: '1.3rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Discover the elegance of traditional craftsmanship blended with modern design.</p>
                    <Link to={`/shop`} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>Shop Collection</Link>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Featured Products</h2>
                        <p style={{ color: '#666' }}>Handpicked treasures just for you.</p>
                    </div>

                    <div className="grid-responsive">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '50px' }}>
                        <button className="btn btn-outline">View All Products</button>
                    </div>
                </div>
            </section>

            {/* Product Showcase Section */}
            <section className="section" style={{ backgroundColor: '#f9f9f9ea', padding: '60px 0' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Artisan Spotlight</h2>
                        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div>
                    </div>

                    {products.filter(p => [2, 4].includes(p.id)).map((product, index) => (
                        <div key={product.id} className={`showcase-item ${index % 2 !== 0 ? 'reverse' : ''}`} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '50px',
                            marginBottom: '80px',
                        }}>
                            {/* Image Side */}
                            <div className="showcase-img-wrapper" style={{ flex: '1 1 400px' }}>
                                <div style={{
                                    position: 'relative',
                                    height: '500px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="showcase-content" style={{ flex: '1 1 400px', textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '5px 15px',
                                    backgroundColor: 'var(--color-secondary)',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    marginBottom: '20px',
                                    textTransform: 'uppercase',
                                    fontWeight: '600'
                                }}>
                                    {product.category}
                                </span>
                                <h3 style={{ fontSize: '2.2rem', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>{product.name}</h3>
                                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '30px', maxWidth: '90%', marginLeft: index % 2 !== 0 ? 'auto' : '0' }}>
                                    {product.description}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Shop by Category</h2>
                        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div>
                    </div>
                    <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {['Home Decor', 'Textiles', 'Dining', 'Wellness'].map((cat, index) => {
                            const categoryImages = {
                                'Home Decor': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
                                'Textiles': 'https://images.unsplash.com/photo-1670490340295-95b418fe59a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                'Dining': 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop',
                                'Wellness': 'https://images.unsplash.com/photo-1651315283944-852219dff97b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            };

                            return (
                                <div key={index} style={{ position: 'relative', height: '300px', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}>
                                    <img
                                        src={categoryImages[cat]}
                                        alt={cat}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.target.style.transform = 'scale(1.0)'}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <h3 style={{ color: 'white', fontSize: '1.8rem', borderBottom: '2px solid white', paddingBottom: '5px' }}>{cat}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="container text-center">
                    <h2 style={{ marginBottom: '40px' }}>What Our Customers Say</h2>
                    <div className="grid-responsive">
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#555' }}>"Absolutely beautiful craftsmanship. The packaging was eco-friendly and the delivery was prompt. Will definitely order again!"</p>
                                <h4 style={{ fontSize: '1rem', color: 'var(--color-secondary)' }}>- Anjali S.</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .showcase-item.reverse {
                    flex-direction: row-reverse;
                }

                @media (max-width: 768px) {
                    .hero-title { font-size: 2.5rem !important; }
                    .hero-subtitle { font-size: 1rem !important; }
                    
                    .showcase-item {
                        flex-direction: column !important;
                        text-align: center !important;
                    }
                    .showcase-item.reverse {
                        flex-direction: column !important;
                    }
                    .showcase-content {
                        text-align: center !important;
                        padding: 0 10px;
                    }
                    .showcase-content p {
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .showcase-content > div {
                        justify-content: center !important;
                    }
                    .showcase-img-wrapper > div {
                        height: 300px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;
