import React from "react";
import styled from "styled-components";
import { shorten } from "../../utilities";
import Button from "./Button";

const Product = ({ id, title, price, description, category, image }) => {
  return (
    <StyledProduct>
      <figure className="product-image">
        <img src={image} alt={title} />
        <figcaption className="product-price">£{price}</figcaption>
      </figure>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{shorten(description, 7)}</p>
        <Button>View</Button>
      </div>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  .product-image {
    position: relative;
    width: 90px;
    min-width: 90px;
    border-radius: 5px;
    margin-right: 0.75rem;
    overflow: hidden;
    border-radius: 5px;

    img {
      min-width: 100%;
    }

    .product-price {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
      font-size: 0.7rem;
      background: #bb37c7;
      padding: 0.25em 0.5em 0.15em;
      border-top-left-radius: 5px;
    }
  }

  .product-title {
    margin-top: -0.2em;
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .product-description {
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    line-height: 1.3;
  }
`;

export default Product;
