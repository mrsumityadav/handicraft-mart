import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Minus, Plus, Heart, ShoppingBag, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, addToCart, toggleWishlist, wishlist } = useShop();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState('');

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setActiveImage(foundProduct.image);
        }
    }, [id, products]);

    if (!product) return <div className="section text-center">Loading...</div>;

    const handleQuantity = (type) => {
        if (type === 'inc') setQuantity(q => q + 1);
        else setQuantity(q => (q > 1 ? q - 1 : 1));
    };

    const isWishlisted = wishlist.includes(product.id);

    return (
        <div className="product-detail-page section">
            <div className="container">
                <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', color: '#666' }}>
                    <ArrowLeft size={16} /> Back to Shop
                </Link>

                <div className="product-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>

                    {/* Image Gallery */}
                    <div className="product-gallery">
                        <div style={{ borderRadius: '8px', overflow: 'hidden', aspectRatio: '4/5', marginBottom: '15px' }}>
                            <img src={activeImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '5px' }}>
                            {/* Dummy thumbnails for demo - re-using main image effectively since we don't have multiple real images per mock item */}
                            {[product.image, product.image, product.image].map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        flexShrink: 0,
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: activeImage === img && idx === 0 ? '2px solid var(--color-primary)' : '2px solid transparent' // Simplified active check logic
                                    }}>
                                    <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="product-info">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <span style={{ backgroundColor: 'var(--color-bg)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>{product.category}</span>
                            <span style={{ color: '#f59e0b', fontSize: '0.9rem' }}>★ {product.rating}</span>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--color-secondary)' }}>{product.name}</h1>
                        <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '25px' }}>${product.price.toFixed(2)}</p>

                        <p style={{ lineHeight: 1.8, color: '#555', marginBottom: '30px' }}>
                            {product.description}
                        </p>

                        <div className="artisan-badge" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '30px' }}>
                            <div style={{ width: '50px', height: '50px', backgroundColor: '#ddd', borderRadius: '50%', overflow: 'hidden' }}>
                                <img src={`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt="Artisan" />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: '#888' }}>Handcrafted by</div>
                                <div style={{ fontWeight: 600 }}>{product.artisan}</div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '50px' }}>
                                <button onClick={() => handleQuantity('dec')} style={{ padding: '10px 15px' }}><Minus size={16} /></button>
                                <span style={{ width: '30px', textAlign: 'center', fontWeight: 600 }}>{quantity}</span>
                                <button onClick={() => handleQuantity('inc')} style={{ padding: '10px 15px' }}><Plus size={16} /></button>
                            </div>

                            <button
                                onClick={() => addToCart(product, quantity)}
                                className="btn btn-primary"
                                style={{ flex: 1, minWidth: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                <ShoppingBag size={20} /> Add to Cart
                            </button>

                            <button
                                onClick={() => toggleWishlist(product.id)}
                                style={{ padding: '10px', width: '45px', height: '45px', border: '1px solid #ddd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Heart size={20} fill={isWishlisted ? "var(--color-primary)" : "none"} color={isWishlisted ? "var(--color-primary)" : "currentColor"} />
                            </button>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                            <p style={{ marginBottom: '5px' }}>✓ Free Shipping on orders over $100</p>
                            <p>✓ Authentic Handmade Product</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .product-layout {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }
                    h1 { font-size: 2rem !important; }
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;
