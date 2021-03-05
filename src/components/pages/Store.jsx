import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Page from "../presentational/Page";
import Products from "../parts/Products";
import Pagination from "../utilities/Pagination";
import Dropdown from "../utilities/Dropdown";
import products from "../../data/products";
import { atLarge } from "../../styles/mixins";

const PRODUCTS_PER_PAGE = 4;

const Store = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [shownProducts, setShownProducts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAllProducts(products);
      setFilteredProducts(products);
      setShownProducts(products.slice(0, PRODUCTS_PER_PAGE));
    }, 500);
  }, []);

  const getCategories = () => {
    return [...new Set(allProducts.map(p => p.category))];
  };

  const onDropdownChange = choice => {
    if (choice) {
      setFilteredProducts(allProducts.filter(prod => prod.category === choice));
    } else {
      setFilteredProducts(allProducts);
    }
  };

  const onPageChange = newItems => {
    setShownProducts(newItems);
  };

  useEffect(() => {
    if (filteredProducts)
      setShownProducts(filteredProducts.slice(0, PRODUCTS_PER_PAGE));
  }, [filteredProducts]);

  return (
    <Page>
      {shownProducts ? (
        <>
          <StyledDropdown
            noneText="All"
            options={getCategories()}
            onChange={onDropdownChange}
          />
          <Products products={shownProducts} />
          <StyledPagination
            key={filteredProducts}
            items={filteredProducts}
            itemsPerPage={PRODUCTS_PER_PAGE}
            onChange={onPageChange}
          />
        </>
      ) : (
        "Loading..."
      )}
    </Page>
  );
};

const StyledDropdown = styled(Dropdown)`
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  ${atLarge(css`
    top: 12.5vh;
  `)}
`;

const StyledPagination = styled(Pagination)`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);

  ${atLarge(css`
    bottom: 7.5%;
  `)}
`;

export default Store;
