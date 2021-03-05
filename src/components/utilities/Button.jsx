import styled from "styled-components";
import { atLarge } from "../../styles/mixins";

const Button = styled.button`
  cursor: pointer;
  background: #fff;
  color: #111;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.6em 1.2em;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: opacity 200ms ease-out;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  ${atLarge("font-size: 1.1rem")}
`;

export default Button;
