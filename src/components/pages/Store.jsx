import { useEffect, useState } from "react";
import Page from "../presentational/Page";
import products from "../../fakeProducts";
import Products from "../parts/Products";
import Pagination from "../utilities/Pagination";

const Store = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [shownProducts, setShownProducts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAllProducts(products);
      setShownProducts(products.slice(0, 4));
    }, 500);
  }, []);

  // Implement a useEffect, with category and currentPage dependencies, which changes the shown products.

  return (
    <Page>
      {shownProducts ? (
        <>
          <Products products={shownProducts} />
          <Pagination totalPosts={allProducts.length} postsPerPage={4} />
        </>
      ) : (
        "Loading..."
      )}
    </Page>
  );
};

export default Store;
