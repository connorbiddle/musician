import styled from "styled-components";
import { fadeUp, bounce } from "../../styles/animations";
import { atSmall, atXLarge } from "../../styles/mixins";
import Logo from "../../assets/images/logo.svg";

const Showcase = () => {
  return (
    <StyledShowcase>
      <div className="logo">
        <img src={Logo} alt="Band logo" />
      </div>
      <i className="icon fas fa-chevron-down fa-2x" />
    </StyledShowcase>
  );
};

const StyledShowcase = styled.header`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${fadeUp} ease 1s forwards 0.3s;

  .logo {
    width: 300px;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.15));

    ${atSmall(`width: 450px`)}
    ${atXLarge(`width: 550px`)}
  }

  .icon {
    position: absolute;
    bottom: 2rem;
    left: calc(50% - 1rem);
    animation: ${bounce} ease-in-out 1s alternate infinite;
  }
`;

export default Showcase;
