import { useEffect, useState } from "react";
import styled from "styled-components";

const Input = props => {
  const [value, setValue] = useState(props.default || "");

  const updateValue = e => setValue(e.target.value);

  useEffect(() => {
    if (props.onChange) props.onChange(value);
  }, [value]);

  return <StyledInput value={value} {...props} onChange={updateValue} />;
};

const StyledInput = styled.input`
  color: #fff;
  background: none;
  display: block;
  width: 100%;
  font-size: 1.25rem;
  padding: 0.5rem 0;
  border: none;
  border-bottom: 2px solid #fff;
  margin-bottom: 1rem;

  transition: opacity 200ms ease-out;

  &:disabled {
    opacity: 0.4;
  }
`;

export default Input;
