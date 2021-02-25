import React from "react";
import styled from "styled-components";

const Pagination = ({ totalPosts, postsPerPage }) => {
  const pages = Math.ceil(totalPosts / postsPerPage);

  return (
    <StyledPagination>
      Pagination. Total posts: {totalPosts}. Posts per page: {postsPerPage}.
      Pages: {pages}.
    </StyledPagination>
  );
};

const StyledPagination = styled.div``;

export default Pagination;
