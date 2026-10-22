import React from 'react';
import './Shop.css';

const products = [
  { id: 1, name: 'Minimalist Poster', price: '$45.00', image: 'https://images.unsplash.com/photo-1580196969807-cc6de06c05be?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Ceramic Vase', price: '$85.00', image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Studio Tote Bag', price: '$25.00', image: 'https://images.unsplash.com/photo-1597334707297-7053e19875bb?auto=format&fit=crop&w=600&q=80' },
];

const Shop = () => {
  return (
    <section id="shop" className="section shop">
      <div className="container">
        <div className="section-title">
          <h2>The Shop</h2>
          <p>Bring a piece of the studio home with our exclusive collection of art prints and goods.</p>
        </div>
        
        <div className="grid grid-cols-3 shop-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} loading="lazy" />
                <button className="add-to-cart-btn">Quick Add</button>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="shop-all">
           <button className="btn btn-outline">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
