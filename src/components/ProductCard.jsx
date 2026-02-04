import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import '../index.css';

const ProductCard = ({ product }) => {
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const isWishlisted = wishlist.includes(product.id);

    return (
        <div className="product-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', transition: 'all 0.3s ease', boxShadow: 'var(--shadow-sm)', backgroundColor: 'white' }}>
            {/* Product Image */}
            <div className="product-image-container" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="product-img"
                />

                {/* Overlay Actions */}
                <div className="product-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button
                            onClick={() => toggleWishlist(product.id)}
                            style={{ backgroundColor: 'white', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Heart size={18} fill={isWishlisted ? "var(--color-primary)" : "none"} color={isWishlisted ? "var(--color-primary)" : "currentColor"} />
                        </button>
                        <button
                            onClick={() => addToCart(product)}
                            style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ShoppingBag size={18} />
                        </button>
                        <Link to={`/product/${product.id}`}
                            style={{ backgroundColor: 'white', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                            <Eye size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div style={{ padding: '15px' }}>
                <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{product.category}</div>
                <Link to={`/product/${product.id}`} style={{ display: 'block', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', margin: 0 }}>{product.name}</h3>
                </Link>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: 'var(--color-secondary)' }}>${product.price.toFixed(2)}</span>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>{product.artisan}</div>
                </div>
            </div>

            <style>{`
        .product-card:hover {  box-shadow: var(--shadow-lg); transform: translateY(-5px); }
        .product-card:hover .product-img { transform: scale(1.1); }
        .product-card:hover .product-overlay { opacity: 1; }
      `}</style>
        </div>
    );
};

export default ProductCard;
