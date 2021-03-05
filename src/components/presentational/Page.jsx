import styled from "styled-components";
import { fade } from "../../styles/animations";

const Page = styled.section`
  min-height: 87.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fade()} 0.75s ease forwards;
  position: relative;
`;

export default Page;
