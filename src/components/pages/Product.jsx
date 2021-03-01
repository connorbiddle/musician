import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Page from "../presentational/Page";
import Flex from "../presentational/Flex";
import Button from "../utilities/Button";
import products from "../../products";

const Product = ({ appHeight, slug }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProduct(products.find(prod => prod.slug === slug));
    }, 500);
  }, []);

  return (
    <Page appHeight={appHeight}>
      <Flex
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        {product === null ? (
          "Loading..."
        ) : (
          <div>
            {product.title} <br /> {product.price} <br /> {product.category}
            <br />
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </div>
        )}
      </Flex>
    </Page>
  );
};

export default Product;
