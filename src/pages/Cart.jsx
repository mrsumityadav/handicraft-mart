import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useShop();

    if (cart.length === 0) {
        return (
            <div className="section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Your cart is empty</h2>
                <p style={{ marginBottom: '30px', color: '#666' }}>Looks like you haven't added any unique handicrafts yet.</p>
                <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page section">
            <div className="container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Shopping Cart</h1>

                <div className="cart-layout" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px' }}>

                    {/* Cart Items */}
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} style={{ display: 'flex', gap: '20px', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #eee' }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                        <h3 style={{ fontSize: '1.2rem', margin: 0 }}><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                                        <p style={{ fontWeight: 700 }}>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '15px' }}>{item.category}</p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px' }}>
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '5px 10px' }}><Minus size={14} /></button>
                                            <span style={{ padding: '0 10px', fontSize: '0.9rem' }}>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '5px 10px' }}><Plus size={14} /></button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                                            <Trash2 size={16} /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="order-summary" style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
                        <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <span style={{ color: '#666' }}>Subtotal</span>
                            <span style={{ fontWeight: 600 }}>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <span style={{ color: '#666' }}>Shipping</span>
                            <span style={{ color: 'green' }}>Free</span>
                        </div>
                        <div style={{ borderTop: '1px solid #ddd', margin: '20px 0' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '1.2rem', fontWeight: 700 }}>
                            <span>Total</span>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                            Proceed to Checkout
                        </button>
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <Link to="/shop" style={{ fontSize: '0.9rem', color: '#666', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                <ArrowLeft size={14} /> Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
           .cart-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
};

export default Cart;
