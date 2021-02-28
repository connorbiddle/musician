import styled from "styled-components";

import React from "react";

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  cursor: pointer;
  background: #fff;
  color: #111;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.35em 0.75em;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
`;

export default Button;
