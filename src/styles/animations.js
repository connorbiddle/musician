import { keyframes } from "styled-components";

export const fade = () => keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const fadeUp = () => keyframes`
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeDown = (x = "0") => keyframes`
  0% {
    opacity: 0;
    transform: translate(${x}, -1rem);
  }
  100% {
    opacity: 1;
    transform: translate(${x}, 0);
  }
`;

export const bounce = () => keyframes`
  0% {
    transform: translateY(-0.75rem);
  }
  100% {
    transform: translateY(0rem);
  }
`;

export const spin = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
