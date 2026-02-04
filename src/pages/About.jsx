import React from 'react';
import banner from '../assets/unnamed.jpg';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero" style={{
                height: '60vh',
                minHeight: '400px',
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner}) center/cover no-repeat`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <div className="container text-center" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '15px', color: '#F4F1DE' }}>Crafting with Soul</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9, color: '#F4F1DE' }}>Preserving heritage, empowering artisans, and bringing centuries of tradition to your home.</p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section">
                <div className="container">
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <span style={{ color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', display: 'block', marginBottom: '10px' }}>Our Story</span>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', lineHeight: 1.2 }}>Reviving Lost Arts, One Piece at a Time.</h2>
                            <p style={{ marginBottom: '20px', lineHeight: 1.8, color: '#555', fontSize: '1.05rem' }}>
                                Handicraft was born out of a passion to bridge the gap between rural Indian artisans and the global market. In a world of mass-produced goods, we stand for the slow, the handmade, and the unique.
                            </p>
                            <p style={{ lineHeight: 1.8, color: '#555', fontSize: '1.05rem' }}>
                                Every item in our collection is not just a product; it’s a story. A story of a potter in Kutch spinning the wheel, a weaver in Varanasi creating magic with silk, or a painter in Bihar preserving the Madhubani folklore. We are just the storytellers.
                            </p>
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '20px 20px 0 var(--color-accent)' }}>
                            <img src="https://wildfloc.com/wp-content/uploads/2025/01/Wildfloc-Handicrafts-Factory-Tour.webp" alt="Craftsmanship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section" style={{ backgroundColor: '#fff8f6' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Our Values</h2>
                        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                        {[
                            { title: 'Ethically Sourced', icon: '🌿', desc: 'We ensure fair wages and safe working conditions for every artisan we partner with.' },
                            { title: 'Sustainability', icon: '♻️', desc: 'From raw materials to packaging, we strive to minimize our environmental footprint.' },
                            { title: 'Authenticity', icon: '✨', desc: 'No factory reproductions. Every piece is genuinely handcrafted using traditional techniques.' }
                        ].map((value, idx) => (
                            <div key={idx} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{value.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{value.title}</h3>
                                <p style={{ color: '#666', lineHeight: 1.6 }}>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Artisans */}
            <section className="section">
                <div className="container text-center">
                    <h2 style={{ marginBottom: '15px', fontSize: '2.5rem' }}>Meet The Makers</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 50px', color: '#666' }}>The hands and hearts behind your favorite pieces.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        {[
                            { name: 'Ramesh', craft: 'Master Potter', loc: 'Rajasthan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop' },
                            { name: 'Sunita', craft: 'Textile Weaver', loc: 'Varanasi', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2670&auto=format&fit=crop' },
                            { name: 'Arjun', craft: 'Wood Carver', loc: 'Saharanpur', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop' }
                        ].map((artisan, idx) => (
                            <div key={idx} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
                                <div style={{ height: '350px' }}>
                                    <img src={artisan.img} alt={artisan.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0, left: 0, right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    padding: '30px 20px 20px',
                                    color: 'white',
                                    textAlign: 'left'
                                }}>
                                    <h4 style={{ fontSize: '1.4rem', marginBottom: '5px', color: 'white' }}>{artisan.name}</h4>
                                    <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>{artisan.craft} • {artisan.loc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// export default About;

export default About;
