import { Link } from "react-router-dom";

import React from "react";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p1", title: "Product 2" },
  { id: "p1", title: "Product 3" },
];
const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
