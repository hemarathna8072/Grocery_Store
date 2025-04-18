import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
// import '../styles/ProductPage.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products') // Update this to your actual backend URL
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="product-page">
        <h2>All Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
