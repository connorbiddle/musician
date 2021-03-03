import React from "react";
import styled, { css } from "styled-components";
import { atLarge } from "../../styles/mixins";
import Button from "../utilities/Button";

const Show = ({ date, ticketsUrl, location }) => {
  return (
    <StyledShow>
      <div className="show-date">{date.format("LL")}</div>
      <div className="show-location">
        <div>{location.event}</div>
        <div>{location.venue}</div>
        <div>{location.city}</div>
      </div>
      <div className="show-tickets">
        <a href={ticketsUrl} target="_blank">
          <Button>Tickets</Button>
        </a>
      </div>
    </StyledShow>
  );
};

const StyledShow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.35;
  font-size: 1rem;

  > div {
    margin-bottom: 0.35rem;
  }

  .show-date {
    font-weight: 700;
    font-size: 1.05em;
  }

  .show-tickets {
    margin-top: 0.5rem;
  }

  ${atLarge(css`
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.1rem;

    > div {
      flex: 1;
    }

    .show-location {
      flex: 4;
    }
  `)}
`;

export default Show;
