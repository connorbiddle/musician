import styled from "styled-components";

const Flex = styled.div`
  display: flex;

  height: ${({ height }) => height};
  width: ${({ width }) => width};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export default Flex;
