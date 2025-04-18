import React from 'react';
import '../styles/BestSeller.css';

const bestSellers = [
  {
    id: 1,
    name: 'Baby Wet Wipes with Vitamin E & Aloe Vera, 72',
    brand: 'Bodyguard',
    price: 250,
    discount: '',
    rating: '4.1',
    reviews: 100,
    image: '/images/best1.png',
  },
  {
    id: 2,
    name: 'Baby Wipes With Moisture Lock Cap',
    brand: 'Dabur',
    price: 835.8,
    originalPrice: 1194,
    discount: '30% OFF',
    rating: '4.7',
    reviews: 6,
    image: '/images/best2.png',
  },
  {
    id: 3,
    name: 'Baby Wet Wipes with Vitamin E & Aloe Vera, 72',
    brand: 'Bodyguard',
    price: 500,
    rating: '3.9',
    reviews: 8,
    image: '/images/best3.png',
  },
  {
    id: 4,
    name: 'Wipeout Baby Safety Wipes',
    brand: 'MyGlamm',
    price: 269.1,
    originalPrice: 299,
    discount: '₹30 OFF',
    image: '/images/best4.png',
  },
];

const BestSellers = () => {
  return (
    <div className="best-container">
      <div className="best-header">
        <h2>Best Sellers</h2>
        <a href="#">Show More</a>
      </div>
      <div className="best-grid">
        {bestSellers.map((item) => (
          <div className="card" key={item.id}>
            {item.discount && <div className="discount">{item.discount}</div>}
            <img src={item.image} alt={item.name} />
            <p className="brand">{item.brand}</p>
            <p className="name">{item.name}</p>
            {item.rating && (
              <p className="rating">
                <span>⭐ {item.rating}</span> {item.reviews} Ratings
              </p>
            )}
            <select>
              <option>72 Pulls - Pack of 2</option>
              <option>Pack of 4</option>
              <option>Pack of 6</option>
            </select>
            <div className="price">
              ₹{item.price}
              {item.originalPrice && (
                <span className="strike"> ₹{item.originalPrice}</span>
              )}
            </div>
            <div className="buttons">
              <button>🔖</button>
              <button className="add-btn">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
