import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Page from "../presentational/Page";
import Flex from "../presentational/Flex";
import Loading from "../presentational/Loading";
import Button from "../utilities/Button";
import Input from "../utilities/Input";
import products from "../../data/products";
import { fade } from "../../styles/animations";
import { atLarge } from "../../styles/mixins";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Product = ({ slug }) => {
  const [product, setProduct] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(null);
  const [added, setAdded] = useState(false);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      setProduct(products.find(prod => prod.slug === slug));
    }, 500);
  }, []);

  const addToCart = () => {
    const quantity = parseInt(itemQuantity);
    if (!isNaN(quantity)) {
      addItem({ ...product }, parseInt(itemQuantity));
      setAdded(true);
    }
  };

  return (
    <StyledPage>
      {product === null ? (
        <Flex
          height="100%"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Loading />
        </Flex>
      ) : (
        <>
          <Link to="/" className="product-go-back">
            <i className="fas fa-angle-left" /> Back to Store
          </Link>
          <StyledProduct>
            <figure className="product-image">
              <img src={product.image} alt={product.title} />
            </figure>
            <div className="product-details">
              <h1 className="product-title">{product.title}</h1>
              <div className="product-price">£{product.price}</div>
              <p className="product-description">{product.description}</p>
              <div className="product-interact">
                <div className="product-add-to-cart">
                  <Input
                    className="product-quantity"
                    default={1}
                    onChange={setItemQuantity}
                    disabled={added}
                  />
                  <Button onClick={addToCart} disabled={added}>
                    {!added ? "Add to Cart" : "Item Added!"}
                  </Button>
                </div>
              </div>
            </div>
          </StyledProduct>
        </>
      )}
    </StyledPage>
  );
};

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin: 0 auto;
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
    justify-content: center;
    width: 850px;
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
      flex: 2.5;
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

const StyledPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .product-go-back {
    animation: ${fade} 500ms ease;
    color: #fff;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    margin: -3rem 0 2rem;
    font-size: 1.1rem;
    > i {
      margin-right: 0.5rem;
    }
  }

  .product-add-to-cart {
    display: flex;
    align-items: center;

    .product-quantity {
      width: 3rem;
      text-align: center;
      margin-right: 1.5rem;
    }
  }
`;

export default Product;
