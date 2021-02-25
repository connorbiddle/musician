import { css } from "styled-components";

export const atSmall = styles => {
  return css`
    @media (min-width: 500px) {
      ${styles}
    }
  `;
};

export const atMedium = styles => {
  return css`
    @media (min-width: 768px) {
      ${styles}
    }
  `;
};

export const atLarge = styles => {
  return css`
    @media (min-width: 1000px) {
      ${styles}
    }
  `;
};

export const atXLarge = styles => {
  return css`
    @media (min-width: 1400px) {
      ${styles}
    }
  `;
};
