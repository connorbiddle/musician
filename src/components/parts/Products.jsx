import styled, { css } from "styled-components";
import ProductSmall from "../utilities/ProductSmall";
import { fade } from "../../styles/animations";
import { atLarge } from "../../styles/mixins";

const Products = ({ products }) => {
  const key = products.map(p => p.id).join("");

  return (
    <StyledProducts key={key}>
      <div className="products-inner">
        {products.map(product => (
          <ProductSmall key={product.id} {...product} />
        ))}
      </div>
    </StyledProducts>
  );
};

const StyledProducts = styled.section`
  animation: ${fade()} 750ms ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .products-inner {
    ${atLarge(css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    `)}
  }
`;

export default Products;
