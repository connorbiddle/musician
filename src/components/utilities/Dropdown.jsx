import { useEffect, useState } from "react";
import styled from "styled-components";
import { fade } from "../../styles/animations";

const Dropdown = ({ options, onChange }) => {
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
    <StyledDropdown>
      <button className="active-choice" onMouseDown={toggleDropdown}>
        {activeChoice ? activeChoice : "All"}{" "}
        <i className={`fas fa-angle-${isOpen ? "up" : "down"}`} />
      </button>
      {isOpen && (
        <div className="choices">
          <div className="choice" onMouseDown={select(null)}>
            All
          </div>
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
  margin-bottom: 5rem;
  padding: 0.5rem;

  .active-choice {
    cursor: pointer;
    border: none;
    background: none;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1em;

    > i {
      margin-left: 0.25rem;
    }
  }

  .choices {
    position: absolute;
    background: rgba(0, 0, 0, 0.825);
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    padding: 0.5rem;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    animation: ${fade} 250ms ease forwards;

    .choice {
      cursor: pointer;
      padding: 0.5rem;
      transition: all ease 200ms;
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
`;

export default Dropdown;
