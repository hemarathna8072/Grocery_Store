import React, { useEffect, useState } from "react";
import '../styles/SmartBasket.css';

const SmartBasket = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // credentials: 'include' // use if you're using cookies
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="smart-basket-container">
      <div className="header">
        <h2>My Smart Basket</h2>
        <button className="view-all" onClick={fetchProducts}>View All</button>
      </div>

      <div className="product-list">
        {products.map((item) => (
          <div key={item._id} className="product-card">
            {/* <div className="offer-tag">{item.offer || "10% OFF"}</div>
            <img src={item.image || "/images/placeholder.png"} alt={item.name} className="product-image" />
            <p className="brand">fresho!</p> */}
            <h3 className="product-title">{item.name}</h3>

            <select className="product-weight">
              {["1 kg", "500 g", "2 kg"].map((qty, idx) => (
                <option key={idx}>{qty}</option>
              ))}
            </select>

            <div className="product-price">
              ₹{item.price.toFixed(2)}
              <span className="original-price">₹{(item.price * 1.2).toFixed(2)}</span>
            </div>
            <button className="add-btn">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartBasket;
