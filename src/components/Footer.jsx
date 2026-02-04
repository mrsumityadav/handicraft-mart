import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-white)', padding: '60px 0 20px' }}>
            <div className="container">
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>Handicraft.</h3>
                        <p style={{ opacity: 0.8 }}>Celebrating the art of Indian craftsmanship.</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-white)', marginBottom: '15px' }}>Shop</h4>
                        <ul style={{ opacity: 0.8, lineHeight: 2 }}>
                            <li>All Products</li>
                            <li>Home Decor</li>
                            <li>Jewelry</li>
                            <li>Textiles</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-white)', marginBottom: '15px' }}>Support</h4>
                        <ul style={{ opacity: 0.8, lineHeight: 2 }}>
                            <li>Contact Us</li>
                            <li>Shipping & Returns</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-white)', marginBottom: '15px' }}>Newsletter</h4>
                        <p style={{ opacity: 0.8, marginBottom: '10px' }}>Subscribe for updates and offers.</p>
                        <div style={{ display: 'flex' }}>
                            <input type="email" placeholder="Your email" style={{ padding: '10px', borderRadius: '4px 0 0 4px', border: 'none', outline: 'none', width: '100%' }} />
                            <button style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-secondary)', padding: '0 20px', borderRadius: '0 4px 4px 0', fontWeight: 'bold' }}>Join</button>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
                    &copy; 2026 Handicraft. All rights reserved.
                </div>
            </div>

            <style>{`
               /* Footer already uses auto-fit grid, which is responsive by default! 
                  Just ensuring padding holds up. */
               @media (max-width: 500px) {
                  .footer-grid {
                      grid-template-columns: 1fr !important;
                      text-align: center;
                  }
                  .footer-grid > div {
                      margin-bottom: 20px;
                  }
               } 
            `}</style>
        </footer>
    );
};

export default Footer;
