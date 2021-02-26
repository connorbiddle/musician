import { useEffect, useState } from "react";
import Page from "../presentational/Page";
import products from "../../fakeProducts";
import Products from "../parts/Products";
import Pagination from "../utilities/Pagination";
import Dropdown from "../utilities/Dropdown";

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
    const categories = [];
    for (let product of allProducts) {
      categories.push(product.category);
    }
    return [...new Set(categories)];
  };

  const onDropdownChange = choice => {
    if (choice === null) {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter(product => product.category === choice)
      );
    }
  };

  const onPageChange = (firstIndex, lastIndex) => {
    setShownProducts(filteredProducts.slice(firstIndex, lastIndex + 1));
  };

  return (
    <Page>
      {shownProducts ? (
        <>
          <Dropdown options={getCategories()} onChange={onDropdownChange} />
          <Products products={shownProducts} />
          <Pagination
            key={filteredProducts}
            totalItems={filteredProducts.length}
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

export default Store;
