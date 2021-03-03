import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Page from "../presentational/Page";
import Flex from "../presentational/Flex";
import Button from "../utilities/Button";
import Dropdown from "../utilities/Dropdown";
import products from "../../data/products";
import { fade } from "../../styles/animations";
import { atLarge } from "../../styles/mixins";
import { CartContext } from "../../context/CartContext";

const Product = ({ appHeight, slug }) => {
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      setProduct(products.find(prod => prod.slug === slug));
    }, 500);
  }, []);

  const onDropdownChange = choice => setSize(choice);

  const addToCart = () => addItem(product);

  return (
    <Page appHeight={appHeight}>
      {product === null ? (
        <Flex
          height="100%"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          Loading...
        </Flex>
      ) : (
        <StyledProduct>
          <figure className="product-image">
            <img src={product.image} alt={product.title} />
          </figure>
          <div className="product-details">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-price">£{product.price}</div>
            <p className="product-description">{product.description}</p>
            <div className="product-interact">
              {product.category === "Clothing" && (
                <Dropdown
                  options={product.sizes}
                  onChange={onDropdownChange}
                  noneText="Sizes"
                  disallowNone
                />
              )}
              <Button onClick={addToCart}>Add to cart</Button>
            </div>
          </div>
        </StyledProduct>
      )}
    </Page>
  );
};

const StyledProduct = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin: auto;
  animation: ${fade} 500ms ease;

  .product-image {
    display: flex;
    justify-content: center;
    margin-bottom: 0.75rem;
    img {
      max-width: 55%;
      border-radius: 5px;
    }
  }

  .product-title {
    font-size: 1.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.15rem;
    text-align: center;
  }

  .product-price {
    opacity: 0.85;
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.65);
    text-align: center;
  }

  .product-description {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  .product-interact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${atLarge(css`
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 100%;

    .product-image {
      display: flex;
      justify-content: center;
      margin: 0 2.5rem 0 0;
      flex: 1;
      img {
        max-width: 100%;
        width: 100%;
        border-radius: 5px;
      }
    }

    .product-details {
      flex: 3;
    }

    .product-title {
      font-size: 2rem;
      margin-bottom: 0.15rem;
      text-align: left;
    }

    .product-price {
      opacity: 0.85;
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.65);
      text-align: left;
    }

    .product-description {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 0.75rem;
    }

    .product-interact {
      align-items: flex-start;
    }
  `)}
`;

export default Product;
