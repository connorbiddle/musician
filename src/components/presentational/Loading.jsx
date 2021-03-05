import styled from "styled-components";
import LoadingIcon from "../../assets/images/loading.svg";
import { spin } from "../../styles/animations";

const Loading = () => {
  return (
    <StyledLoading>
      <img className="loading-img" src={LoadingIcon} alt="Loading..." />
      <div className="loading-text">Loading...</div>
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .loading-img {
    animation: 750ms ${spin} linear infinite;
    width: 2rem;
    margin-bottom: 0.5rem;
  }

  .loading-text {
    text-transform: uppercase;
  }
`;

export default Loading;
