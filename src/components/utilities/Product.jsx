import React from "react";
import styled from "styled-components";

const Product = ({ id, title, price, description, category, image }) => {
  return (
    <StyledProduct>
      {title} | {category} | £{price}
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export default Product;
