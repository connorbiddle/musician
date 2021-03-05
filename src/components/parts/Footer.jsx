import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StyledFooter>&copy; Fake Records Ltd.</StyledFooter>;
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.75);
  padding: 0.5rem 0;
  font-size: 0.75rem;
`;

export default Footer;
