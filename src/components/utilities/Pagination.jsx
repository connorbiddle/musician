import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Pagination = ({ totalItems, itemsPerPage, onChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const prevPage = () => {
    if (isFirstPage) return;
    setCurrentPage(page => page - 1);
  };

  const nextPage = () => {
    if (isLastPage) return;
    setCurrentPage(page => page + 1);
  };

  const firstPage = () => {
    if (isFirstPage) return;
    setCurrentPage(1);
  };

  const lastPage = () => {
    if (isLastPage) return;
    setCurrentPage(totalPages);
  };

  useEffect(() => {
    setIsFirstPage(currentPage <= 1);
    setIsLastPage(currentPage >= totalPages);

    const firstIndex = currentPage * itemsPerPage - itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage - 1;

    onChange(firstIndex, lastIndex);
  }, [currentPage]);

  return (
    <StyledPagination>
      <button
        onMouseDown={firstPage}
        className="pagination-item"
        disabled={isFirstPage}
      >
        <i className="fas fa-angle-double-left" />
      </button>
      <button
        onMouseDown={prevPage}
        className="pagination-item"
        disabled={isFirstPage}
      >
        <i className="fas fa-angle-left" />
      </button>
      <div className="pagination-item">{currentPage}</div>
      <button
        onMouseDown={nextPage}
        className="pagination-item"
        disabled={isLastPage}
      >
        <i className="fas fa-angle-right" />
      </button>
      <button
        onMouseDown={lastPage}
        className="pagination-item"
        disabled={isLastPage}
      >
        <i className="fas fa-angle-double-right" />
      </button>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 5rem;

  .pagination-item {
    margin: 0 0.75rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    color: #fff;
    font-size: 0.85em;
    width: 2rem;
    height: 2rem;
    transition: opacity 200ms ease;

    &:disabled {
      cursor: default;
      opacity: 0;
      pointer-events: none;
    }
  }
`;

export default Pagination;
