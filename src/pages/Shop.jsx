import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Filter, X } from 'lucide-react';
import banner from '../assets/unnamed.jpg';

const Shop = () => {
    const { products } = useShop();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeCategory, setActiveCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const categories = ['All', 'Home Decor', 'Textiles', 'Dining', 'Collectibles', 'Wellness', 'Lighting'];

    useEffect(() => {
        let result = products;

        // Filter by Category
        if (activeCategory !== 'All') {
            result = result.filter(product => product.category === activeCategory);
        }

        // Filter by Price
        result = result.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

        setFilteredProducts(result);
    }, [products, activeCategory, priceRange]);

    const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

    return (
        <div className="shop-page">
            <div
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://theheritageartifacts.com/cdn/shop/collections/3ebcd04001d94eece567cbc089983478.jpg?v=1678684834")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '30px',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 20px',
                        color: '#fff',
                        width: '100%',
                        textAlign: 'left',
                    }}
                    className="shop-banner-content"
                >
                    <h1
                        style={{
                            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                            marginBottom: '10px',
                            color: "#F4F1DE"
                        }}
                    >
                        Handcrafted With Love
                    </h1>
                    <p
                        style={{
                            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                            opacity: 0.9,
                            maxWidth: '600px',
                            color: "#F4F1DE"
                        }}
                    >
                        Discover unique, artisan-made pieces for your home
                    </p>
                </div>
            </div>
            <div className="container" style={{ minHeight: '60vh' }}>

                {/* Mobile Filter Toggle */}
                <h1 style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>Trending Products</h1>
                <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginBottom: '20px' }}>
                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={toggleFilter}>
                        <Filter size={18} /> Filter
                    </button>
                </div>

                <div className="shop-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '40px', marginBottom: '40px' }}>

                    {/* Sidebar Filters */}
                    <aside
                        className={`shop-sidebar ${isFilterOpen ? 'active' : ''}`}
                        style={{
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: 'var(--shadow-sm)',
                            height: 'fit-content',
                            position: 'sticky',
                            top: '90px',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Filters</h3>
                            {isFilterOpen && <X size={20} onClick={toggleFilter} style={{ cursor: 'pointer' }} />}
                        </div>

                        {/* Categories */}
                        <div style={{ marginBottom: '30px' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '15px' }}>Categories</h4>
                            <ul style={{ padding: 0 }}>
                                {categories.map(cat => (
                                    <li key={cat} style={{ marginBottom: '10px' }}>
                                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <input
                                                type="radio"
                                                name="category"
                                                value={cat}
                                                checked={activeCategory === cat}
                                                onChange={() => setActiveCategory(cat)}
                                                style={{ accentColor: 'var(--color-primary)' }}
                                            />
                                            <span style={{ color: activeCategory === cat ? 'var(--color-primary)' : 'inherit', fontWeight: activeCategory === cat ? 'bold' : 'normal' }}>{cat}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '15px' }}>Price Range</h4>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="200"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                                style={{ width: '100%', accentColor: 'var(--color-primary)' }}
                            />
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="shop-products">
                        <p style={{ marginBottom: '20px', color: '#666' }}>Showing {filteredProducts.length} results</p>
                        {filteredProducts.length > 0 ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px' }}>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '50px 0' }}>
                                <p>No products found matching your criteria.</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => { setActiveCategory('All'); setPriceRange([0, 200]); }}
                                    style={{ marginTop: '20px' }}>
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .shop-layout { grid-template-columns: 1fr; }
          .shop-sidebar { 
             display: none; 
             position: fixed; 
             top: 0; left: 0; bottom: 0; 
             width: 80%; 
             max-width: 300px;
             z-index: 1000;
             overflow-y: auto;
          }
          .shop-sidebar.active { display: block; }
        }
      `}</style>
        </div >
    );
};

export default Shop;
