import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Flex from "../presentational/Flex";
import Button from "../utilities/Button";
import Input from "../utilities/Input";
import { fade } from "../../styles/animations";
import { atLarge } from "../../styles/mixins";
import { formatPrice, shorten } from "../../utilities";
import { CartContext } from "../../context/CartContext";

const Cart = ({ items }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);

  const { removeItem, changeQuantity } = useContext(CartContext);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const deleteItem = id => {
    return () => removeItem(id);
  };

  const changeItemQuantity = id => {
    return e => {
      changeQuantity(id, e.target.value);
    };
  };

  useEffect(() => {
    const total = items.reduce(
      (accumulator, current) => accumulator + current.price * current.quantity,
      0
    );
    setTotalPrice(total);
  }, [items]);

  return (
    <StyledCart>
      {cartOpen && (
        <div className="cart-modal">
          <div className="cart-modal-card">
            <button className="cart-modal-close">
              <i className="fas fa-times" onClick={closeCart} />
            </button>
            <ul className="cart-modal-items">
              {items.map(i => (
                <li key={i.id} className="cart-item">
                  <div className="cart-item-image">
                    <figure>
                      <img src={i.image} alt={i.title} />
                    </figure>
                  </div>
                  <div className="cart-item-title">{shorten(i.title, 2)}</div>
                  <div className="cart-item-quantity">
                    <StyledInput
                      default={i.quantity}
                      onBlur={changeItemQuantity(i.id)}
                    />
                  </div>
                  <div className="cart-item-price">
                    &times; {formatPrice(i.price)}
                  </div>
                  <button
                    className="cart-item-delete"
                    onClick={deleteItem(i.id)}
                  >
                    <i className="fas fa-trash" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-modal-total">
              Total: {formatPrice(totalPrice)}
            </div>
            <Flex alignItems="center" justifyContent="center">
              <Button className="cart-modal-checkout" disabled>
                Checkout
              </Button>
            </Flex>
          </div>
        </div>
      )}
      <Button className="cart-button" onClick={openCart}>
        Cart <i className="fas fa-shopping-cart" />
        <div className="cart-button-count">{items.length}</div>
      </Button>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  .cart-modal {
    animation: ${fade()} 350ms ease forwards;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    padding: 0 1rem;
    z-index: 201;
    display: flex;
    align-items: center;
    justify-content: center;

    &-close {
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: #aaa;
      font-size: 1.35rem;
      background: none;
      border: none;
    }

    &-card {
      position: relative;
      color: #111;
      background: #fff;
      padding: 1.5rem;
      width: 100%;
      max-width: 500px;
      border-radius: 5px;
    }

    &-items {
      margin: 1.5rem 0;
      overflow-y: scroll;
      max-height: 20rem;

      .cart-item {
        list-style: none;
        height: 4rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;

        &:last-of-type {
          border-bottom: none;
        }

        > * {
          margin-right: 0.5rem;
        }

        &-image {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          justify-content: center;
          overflow: hidden;
        }
        &-image img {
          border-radius: 5px;
        }

        &-title {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
        }

        &-price {
          text-align: right;
          min-width: 4.5rem;
          margin-right: 0;
        }

        &-delete {
          cursor: pointer;
          background: none;
          border: none;
          color: #bf3939;
          margin-left: 0.5rem;
          font-size: 1.1rem;
        }
      }
    }

    &-total {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    &-checkout {
      background-color: #59ac59;
      color: #fff;
    }
  }

  .cart-button {
    position: fixed;
    animation: ${fade()} 250ms ease;
    bottom: 0.5rem;
    right: 0.5rem;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);

    &-count {
      font-size: 0.7rem;
      width: 1rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
      background: rgb(187, 55, 199);
      background: linear-gradient(
        164deg,
        rgba(187, 55, 199, 1) 0%,
        rgba(138, 57, 170, 1) 100%
      );
    }

    ${atLarge(css`
      bottom: 2rem;
      right: 2rem;
    `)}
  }
`;

const StyledInput = styled(Input)`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  color: #111;
  padding: 0.25rem 0;
  margin-bottom: 0;
  text-align: center;
  border-color: #b8b8b8;
`;

export default Cart;
