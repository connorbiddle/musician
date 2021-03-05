import { useState } from "react";
import styled from "styled-components";
import Page from "../presentational/Page";
import Input from "../utilities/Input";
import Button from "../utilities/Button";
import { atLarge } from "../../styles/mixins";

const Subscribe = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Page>
      <SubscribeForm onSubmit={onSubmit}>
        <div className="subscribe-text">Want to hear more about The Band?</div>
        <div className="subscribe-inputs">
          <Input placeholder="First name" type="text" disabled={submitted} />
          <Input
            placeholder="Email address"
            type="email"
            disabled={submitted}
          />
        </div>
        <div className="subscribe-submit">
          <Button type="submit" disabled={submitted}>
            {!submitted ? "Sign Up" : "Subscribed!"}
          </Button>
        </div>
      </SubscribeForm>
    </Page>
  );
};

const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  justify-content: stretch;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  > div {
    margin-bottom: 1.5rem;
    ${atLarge("margin-bottom: 2.5rem;")}

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .subscribe-text {
    ${atLarge("font-size: 1.25rem;")}
  }
`;

export default Subscribe;
