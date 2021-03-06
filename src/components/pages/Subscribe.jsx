import { useState } from "react";
import styled from "styled-components";
import Page from "../presentational/Page";
import Input from "../utilities/Input";
import Button from "../utilities/Button";
import { atLarge } from "../../styles/mixins";
import { fade } from "../../styles/animations";
import { emailIsValid } from "../../utilities";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    let err;
    if (!emailIsValid(email)) err = "Email address is not valid!";
    if (name.length < 1 || email.length < 1) err = "Form is not complete!";

    if (err) {
      setError(err);
      return;
    }

    setSubmitted(true);
    setError(null);
  };

  return (
    <Page>
      <SubscribeForm onSubmit={onSubmit}>
        <div className="subscribe-text">Want to hear more about The Band?</div>
        <div className="subscribe-inputs">
          <Input
            placeholder="First name"
            type="text"
            disabled={submitted}
            onChange={setName}
          />
          <Input
            placeholder="Email address"
            type="email"
            disabled={submitted}
            onChange={setEmail}
          />
        </div>
        {error && <div className="subscribe-error">{error}</div>}
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

  .subscribe-error {
    position: relative;
    animation: ${fade()} 250ms ease;
    background: rgba(178, 71, 71, 0.75);
    border: 1px solid #a03232;
    padding: 0.75rem;
    border-radius: 5px;
  }
`;

export default Subscribe;
