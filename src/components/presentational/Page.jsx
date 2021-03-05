import styled from "styled-components";
import { fade } from "../../styles/animations";
import { atLarge } from "../../styles/mixins";

const Page = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fade()} 0.75s ease forwards;
  position: relative;

  ${atLarge("min-height: 87.5vh;")}
`;

export default Page;
