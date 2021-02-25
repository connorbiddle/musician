import React from "react";
import Product from "../utilities/Product";

const Products = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
