import styled from "styled-components";
import Product from "../utilities/Product";
import { fade } from "../../styles/animations";

const Products = ({ products }) => {
  const key = products.map(p => p.id).join("");

  return (
    <StyledProducts key={key}>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </StyledProducts>
  );
};

const StyledProducts = styled.section`
  animation: ${fade()} 750ms ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export default Products;
