import styled from "styled-components";
import { fade } from "../../styles/animations";

const Page = styled.section`
  height: ${({ appHeight }) => appHeight * 0.85}px;
  animation: ${fade()} 0.75s ease forwards;
  position: relative;
`;

export default Page;
