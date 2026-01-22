import React, { useState, useContext } from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { products } = useContext(CartContext);
  const [category, setCategory] = useState("All");
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((item) => item.category === category);
  return (
    <div>
      <Hero />
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
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};
export default Home;
