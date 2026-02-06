import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount, wishlist, products } = useShop();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Limit to 5 suggestions
      setSearchResults(filtered);
      setShowSearch(true);
    } else {
      setSearchResults([]);
      setShowSearch(false);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery('');
    setSearchResults([]);
    setShowSearch(false);
  };

  return (
    <nav className="navbar" style={{ padding: '20px 0', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'var(--color-bg)', boxShadow: 'var(--shadow-sm)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-secondary)', zIndex: 102 }}>
          Handicraft.
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="mobile-only" style={{ zIndex: 102, cursor: 'pointer' }} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        {/* Icons & Search */}
        <div className="nav-icons desktop-only" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>

          {/* Search Bar */}
          <div className="search-container" ref={searchRef} style={{ position: 'relative' }}>
            <div
              // style={{display:'flex', justifyContent:"center"}}
              className={`search-input-wrapper ${showSearch || searchQuery ? 'active' : ''}`}
              onClick={() => { setShowSearch(true); inputRef.current?.focus(); }}
            >
              <Search size={20} color="#555" style={{marginLeft:'-5px', minWidth: '20px' }} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setShowSearch(true)}
              />
              {searchQuery && (
                <X size={16} color="#999" style={{ cursor: 'pointer' }} onClick={() => { setSearchQuery(''); setSearchResults([]); }} />
              )}
            </div>

            {/* Search Suggestions Dropdown */}
            {showSearch && searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.map(product => (
                  <div
                    key={product.id}
                    className="search-item"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <img src={product.image} alt={product.name} />
                    <div className="search-item-info">
                      <p className="search-item-name">{product.name}</p>
                      <p className="search-item-price">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/wishlist" style={{ position: 'relative', cursor: 'pointer', color: 'inherit' }}>
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span style={{ position: 'absolute', top: -5, right: -5, background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '0.6rem', width: '14px', height: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{wishlist.length}</span>
            )}
          </Link>

          <Link to="/cart" style={{ position: 'relative', color: 'inherit' }}>
            <ShoppingBag size={20} />
            <span style={{ position: 'absolute', top: -5, right: -5, background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '0.7rem', width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{getCartCount()}</span>
          </Link>
        </div>
      </div>

      <style>{`
        .nav-links {
          display: flex;
          gap: 30px;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: var(--color-bg);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            z-index: 101;
            box-shadow: none;
          }
          
          .nav-links.active {
            transform: translateY(0);
          }
          
          .nav-links li {
            margin-bottom: 20px;
          }
        }

        /* Search Styles */
        .search-input-wrapper {
            display: flex; 
            align-items: center; 
            background-color: white; 
            border: 1px solid transparent; 
            border-radius: 30px; 
            padding: 8px 15px; 
            width: 40px; 
            transition: all 0.3s ease; 
            overflow: hidden;
            cursor: pointer;
        }
        
        .search-input-wrapper.active {
            width: 280px;
            border-color: #e0e0e0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            cursor: text;
        }

        .search-input-wrapper input {
            border: none;
            outline: none;
            margin-left: 10px;
            width: 100%;
            font-size: 0.95rem;
            background: transparent;
        }

        .search-dropdown {
            position: absolute;
            top: calc(100% + 15px);
            right: 0;
            width: 320px;
            background-color: white;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            border-radius: 12px;
            z-index: 200;
            padding: 10px 0;
            border: 1px solid rgba(0,0,0,0.04);
            animation: slideDown 0.2s ease-out;
        }

        .search-item {
            padding: 12px 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            transition: background-color 0.2s;
            border-bottom: 1px solid #f9f9f9;
        }

        .search-item:last-child {
            border-bottom: none;
        }

        .search-item:hover {
            background-color: #f8f9fa;
        }

        .search-item img {
            width: 45px;
            height: 45px;
            object-fit: cover;
            border-radius: 6px;
        }

        .search-item-info {
            flex: 1;
        }

        .search-item-name {
            margin: 0;
            font-size: 0.95rem;
            font-weight: 600;
            color: #333;
        }

        .search-item-price {
            margin: 0;
            font-size: 0.85rem;
            color: #777;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
