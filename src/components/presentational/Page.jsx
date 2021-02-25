import styled from "styled-components";
import { fade } from "../../styles/animations";

const Page = styled.section`
  height: 85vh;

  animation: ${fade} 0.75s ease forwards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Page;
