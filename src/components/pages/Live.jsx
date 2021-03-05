import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Page from "../presentational/Page";
import Pagination from "../utilities/Pagination";
import Shows from "../parts/Shows";
import { atLarge } from "../../styles/mixins";
import tour from "../../data/tour";
import moment from "moment";

const SHOWS_PER_PAGE = 4;

const Live = () => {
  const [shows, setAllShows] = useState(null);
  const [displayedShows, setDisplayedShows] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const sortedTour = tour.sort((a, b) =>
        a.date.unix() > b.date.unix() ? 1 : -1
      );

      setAllShows(sortedTour);
      setDisplayedShows(sortedTour.slice(0, SHOWS_PER_PAGE));
    }, 500);
  }, []);

  const onPageChange = newItems => {
    setDisplayedShows(newItems);
  };
  return (
    <Page>
      {displayedShows ? (
        <>
          <Shows shows={displayedShows} />
          <StyledPagination
            items={shows}
            itemsPerPage={SHOWS_PER_PAGE}
            onChange={onPageChange}
          />
        </>
      ) : (
        "Loading..."
      )}
    </Page>
  );
};

const StyledPagination = styled(Pagination)`
  margin: 1.5rem 0 2.5rem;
`;

export default Live;
