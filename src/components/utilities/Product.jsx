import React from "react";
import styled from "styled-components";

const Product = ({ id, title, price, description, category, image }) => {
  return (
    <StyledProduct>
      {title} | {category} | £{price}
    </StyledProduct>
  );
};

const StyledProduct = styled.div``;

export default Product;
