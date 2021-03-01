import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "./Button";
import { shorten } from "../../utilities";
import { atLarge } from "../../styles/mixins";

const Product = ({ id, title, price, description, category, image, slug }) => {
  return (
    <StyledProduct to={`/product/${slug}`}>
      <figure className="product-image">
        <img src={image} alt={title} />
        <figcaption className="product-price">£{price}</figcaption>
      </figure>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{shorten(description, 7)}</p>
        <Button className="product-button">View</Button>
      </div>
    </StyledProduct>
  );
};

const StyledProduct = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #fff;
  text-decoration: none;

  &:last-of-type {
    margin-bottom: 0;
  }

  .product-image {
    position: relative;
    width: 70px;
    min-width: 70px;
    border-radius: 5px;
    margin-right: 0.75rem;
    overflow: hidden;
    border-radius: 5px;

    img {
      min-width: 100%;
    }

    .product-price {
      position: absolute;
      bottom: -1px;
      right: -1px;
      z-index: 1;
      font-size: 0.7rem;
      padding: 0.25em 0.5em;
      border-top-left-radius: 5px;
      background: rgb(187, 55, 199);
      background: linear-gradient(
        164deg,
        rgba(187, 55, 199, 1) 0%,
        rgba(138, 57, 170, 1) 100%
      );
      box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.225);
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

  .product-button {
    display: none;

    ${atLarge(css`
      display: inline-block;
    `)}
  }

  ${atLarge(css`
    width: 50%;
    padding: 0 1.75rem;
    margin: 1.75rem 0;
    &:last-of-type {
      margin: 1.75rem 0;
    }

    .product-image {
      width: 140px;
      min-width: 140px;
      margin-right: 1rem;

      .product-price {
        font-size: 0.9rem;
      }
    }

    .product-title {
      font-size: 1.6rem;
      margin-bottom: 0.35rem;
    }

    .product-description {
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }
  `)}
`;

export default Product;
