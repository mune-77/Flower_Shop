import React, { useState, useContext } from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import AboutSection from "../components/AboutSection";
import { posts } from '../blogData';
import BlogCard from "../components/BlogCard";

const Home = () => {
  const { searchFilter } = useContext(CartContext);
  const [category, setCategory] = useState("All");
  const filteredProducts =
    category === "All"
      ? searchFilter
      : searchFilter.filter((item) => item.category === category);
      const displayProducts = filteredProducts.slice(0,8);
  return (
    <div>
      <Hero />
      <AboutSection />
      <p className="mt-5 text-center fw-bold" style={{ color: "#f45d96" }}>
        OUR FLOWER
      </p>
      <h1 className="mt-4 text-center">New Arrivals</h1>
      <div className="d-flex gap-5 justify-content-center">
        <button onClick={() => setCategory("All")} 
        className={`btn ${category === 'All' ? 'active-btn' : 'text-muted'}`}
        >
          All
        </button>
        <button
          onClick={() => setCategory("Bouquet")}
          className={`btn ${category === 'Bouquet' ? 'active-btn' : 'text-muted'}`}
        >
          Bouquet
        </button>
        <button
          onClick={() => setCategory("Flower box")}
           className={`btn ${category === 'Flower box' ? 'active-btn' : 'text-muted'}`}
        >
          Flower box
        </button>
        <button
          onClick={() => setCategory("Flower shelf")}
          className={`btn ${category === 'Flower shelf' ? 'active-btn' : 'text-muted'}`}
        >
          Flower shelf
        </button>
        <button
          onClick={() => setCategory("Basket of flower")}
          className={`btn ${category === 'Basket of flower' ? 'active-btn' : 'text-muted'}`}
        >
          Basket of flower
        </button>
        <button
          onClick={() => setCategory("Gift combos")}
           className={`btn ${category === 'Gift combos' ? 'active-btn' : 'text-muted'}`}
        >
          Gift combos
        </button>
      </div>
      
      <div className="container mt-4">
        <ProductList products={displayProducts} />
        <div className="text-center">
          <Link to='/shop' className="btn border-bottom fw-semibold border-2 mt-5 border-dark border-0 rounded-0">VIEW ALL PRODUCTS</Link>
        </div>
      </div>
      <div className="container-fluid mt-5">
     <div className="image">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 mt-5 pt-4">
            <p className="text-white fw-bold mt-5" style={{ letterSpacing: "3px" }}>CUSTOM FLOWER</p>
            <h1 className="font text-white">Let our flowers make your party more perfect.</h1>
            <div className="d-flex gap-4">
              <Link to='/shop'><button className="btn text-white rounded-pill fw-semibold mt-3 mb-4 py-2 px-4 shadow-sm" style={{ backgroundColor: "#f45d96" }}>ORDER NOW</button></Link>
              <Link to='/contact'><button className="btn bg-light rounded-pill fw-semibold mt-3 mb-4 py-2 px-4 shadow-sm" style={{ color: "#f45d96" }}>CONTACT US</button></Link>
            </div>
          </div>
        </div>
      </div>
     </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row justify-content-between">
          <div className="col-lg-10 col-12">
            <p style={{letterSpacing:'3px', color:'#f45d96'}} className="fw-semibold mb-0">LATEST POSTS</p>
            <h1 style={{letterSpacing:'3px'}}>Florist tricks</h1>
          </div>
          <div className="col-lg-2 col-12">
            <Link to='/blog'><button className="btn fw-semibold mt-3 rounded-pill px-4 py-2 shadow-sm" style={{border:'#f45d96 2px solid'}}>VIEW ALL POSTS</button></Link>
          </div>
        </div>
        <div className="row mt-5">
          {posts.slice(0,3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
