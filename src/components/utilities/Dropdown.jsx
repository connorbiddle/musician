import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { fadeDown } from "../../styles/animations";
import { atLarge } from "../../styles/mixins";

const Dropdown = ({ className, options, noneText, disallowNone, onChange }) => {
  if (!options) throw new Error("Dropdown requires 'options' prop.");

  const [isOpen, setIsOpen] = useState(false);
  const [activeChoice, setActiveChoice] = useState(null);

  const select = option => {
    return () => {
      setIsOpen(false);
      setActiveChoice(option);
    };
  };

  const toggleDropdown = () => setIsOpen(old => !old);

  useEffect(() => {
    onChange(activeChoice);
  }, [activeChoice]);

  return (
    <StyledDropdown className={className}>
      <button className="active-choice" onMouseDown={toggleDropdown}>
        {activeChoice ? activeChoice : noneText}
        <i className={`fas fa-angle-${isOpen ? "up" : "down"}`} />
      </button>
      {isOpen && (
        <div className="choices">
          {!disallowNone && (
            <div className="choice" onMouseDown={select(null)}>
              {noneText}
            </div>
          )}

          {options.map((option, index) => (
            <div className="choice" onMouseDown={select(option)} key={index}>
              {option}
            </div>
          ))}
        </div>
      )}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: relative;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  ${atLarge(css`
    font-size: 1.4rem;
  `)}

  .active-choice {
    cursor: pointer;
    border: none;
    background: none;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;

    > i {
      margin-left: 0.5rem;
    }
  }

  .choices {
    position: absolute;
    background: rgba(255, 255, 255, 0.85);
    color: #111;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    padding: 0.5rem;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    animation: ${fadeDown("-50%")} 250ms ease forwards;
    z-index: 2;

    max-height: 11rem;
    overflow-y: scroll;
    ${atLarge(css`
      max-height: unset;
      overflow-y: unset;
    `)}

    .choice {
      cursor: pointer;
      padding: 0.5rem;
      transition: all ease 200ms;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.9em;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`;

export default Dropdown;
