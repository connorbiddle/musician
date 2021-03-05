import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { fade } from "../../styles/animations";
import { atSmall, atLarge } from "../../styles/mixins";

const Navbar = ({ scrollPosition }) => {
  const [visible, setVisible] = useState(false);
  const [menuBtnVisible, setMenuBtnVisible] = useState(false);

  const toggleNav = () => {
    if (visible) {
      closeNav();
    } else {
      openNav();
    }
  };

  const openNav = () => {
    setVisible(true);
  };

  const closeNav = () => {
    setVisible(false);
  };

  const handleLinkClick = () => {
    if (visible) closeNav();
    window.scrollTo(0, window.innerHeight);
  };

  useEffect(() => {
    const viewportsScrolled = scrollPosition / window.innerHeight;
    setMenuBtnVisible(viewportsScrolled >= 0.7);
  }, [scrollPosition]);

  const links = [
    { text: "Store", url: "/" },
    { text: "Live", url: "/live" },
    { text: "Subscribe", url: "/subscribe" },
  ];

  return (
    <StyledNavbar>
      <div className={"nav-contents" + (visible ? " visible" : "")}>
        {links.map(link => (
          <div className="nav-section" key={link.url}>
            <NavLink exact to={link.url} onClick={handleLinkClick}>
              {link.text}
            </NavLink>
          </div>
        ))}

        <div className="nav-section socials">
          <a href="/" target="_blank">
            <i className="fab fa-facebook" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-twitter" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-youtube" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-spotify" />
          </a>
        </div>
      </div>
      <button className="menu-btn" onMouseDown={toggleNav}>
        <i className={`fas fa-${visible ? "times" : "bars"}`} />
      </button>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  position: relative;
  height: 12.5vh;

  .nav-contents {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 100;

    animation: ${fade()} 350ms ease forwards;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .nav-section {
      a {
        display: block;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.75rem;
        font-weight: 700;
        padding: 0.75rem 0;
      }

      &.socials {
        margin-top: 1rem;
        ${atLarge("margin-top: 0;")}
      }

      &.socials a {
        display: inline;
        margin: 0 0.75rem;
      }
    }

    &.visible {
      display: flex;
    }
  }

  ${atSmall(css`
    .nav-contents .nav-section {
      margin-bottom: 1.75rem;
      a {
        font-size: 1.75rem;
      }
    }
  `)}

  ${atLarge(css`
    position: sticky;
    top: 0;
    z-index: 100;

    .nav-contents {
      position: static;
      display: flex;
      flex-direction: row;
      background-color: transparent;
      height: 100%;

      .nav-section {
        margin: 0 1.25rem;

        a {
          font-size: 1.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 5px;
          transition: background-color 250ms ease-out, color 250ms ease-out;

          &.active {
            background-color: #fff;
            color: #111;
          }
        }

        &.socials a {
          margin: 0;
        }
      }
    }

    .menu-btn {
      display: none;
    }
  `)}

  .menu-btn {
    cursor: pointer;
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.75rem;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 101;

    ${atSmall("font-size: 1.5rem")}
  }
`;

export default Navbar;
