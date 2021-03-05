import { useEffect, useState } from "react";
import styled from "styled-components";
import BG from "../../assets/images/background.png";
import BGBlur from "../../assets/images/background-blur.png";

const Background = ({ scrollPosition }) => {
  const [blur, setBlur] = useState(0);

  const blurBackground = () => {
    const viewportsScrolled = scrollPosition / window.innerHeight;
    const blurValue = viewportsScrolled <= 1 ? viewportsScrolled * 2 : 1;
    setBlur(blurValue);
  };

  useEffect(() => blurBackground(), [scrollPosition]);

  return (
    <StyledBackground blur={blur}>
      <img src={BG} alt="Artist" />
      <img src={BGBlur} alt="Artist" className="blur" />
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -2;
  }

  img.blur {
    transition: opacity 200ms linear;
    z-index: -1;
    opacity: ${({ blur }) => blur};
  }
`;

export default Background;
