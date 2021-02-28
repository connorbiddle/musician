import { useEffect, useState } from "react";
import styled from "styled-components";
import Page from "../presentational/Page";
import Products from "../parts/Products";
import Pagination from "../utilities/Pagination";
import Dropdown from "../utilities/Dropdown";
import products from "../../products";

const PRODUCTS_PER_PAGE = 4;

const Store = ({ appHeight }) => {
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
    if (filteredProducts) setShownProducts(filteredProducts.slice(0, 4));
  }, [filteredProducts]);

  return (
    <Page appHeight={appHeight}>
      {shownProducts ? (
        <>
          <StyledDropdown
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
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const StyledPagination = styled(Pagination)`
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  transform: translateX(-50%);
`;

export default Store;
