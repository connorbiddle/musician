import React from "react";
import styled, { css } from "styled-components";
import Show from "../utilities/Show";
import { fade } from "../../styles/animations";
import { atLarge } from "../../styles/mixins";

const Shows = ({ shows }) => {
  const key = shows.map(s => s.id).join("");

  return (
    <StyledShows key={key}>
      {shows.map(show => (
        <Show key={show.id} {...show} />
      ))}
    </StyledShows>
  );
};

const StyledShows = styled.div`
  animation: ${fade()} 750ms ease;

  ${atLarge(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  `)}
`;

export default Shows;
