import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Wishlist = () => {
    const { products, wishlist } = useShop();

    const wishlistProducts = products.filter(product => wishlist.includes(product.id));

    return (
        <div className="wishlist-page section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Your Wishlist</h1>
                    <p style={{ color: '#666' }}>{wishlistProducts.length} items saved</p>
                </div>

                {wishlistProducts.length > 0 ? (
                    <div className="wishlist-grid">
                        {wishlistProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center" style={{ padding: '60px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ padding: '20px', borderRadius: '50%', backgroundColor: 'var(--color-bg)', marginBottom: '20px' }}>
                            <Heart size={40} color="var(--color-accordion-trigger)" />
                        </div>
                        <h3 style={{ marginBottom: '15px' }}>Your wishlist is empty</h3>
                        <p style={{ color: '#666', marginBottom: '30px', maxWidth: '400px' }}>
                            Heart your favorite items to save them here for later.
                        </p>
                        <Link to="/shop" className="btn btn-primary">Discover Treasures</Link>
                    </div>
                )}
            </div>

            <style>{`
                .wishlist-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }
                
                @media (max-width: 1024px) {
                    .wishlist-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (max-width: 600px) {
                    .wishlist-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Wishlist;
