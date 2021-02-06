import styled from "styled-components";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: block;
  left: 0;
  outline: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 990;
`;

export const Dialog = styled.div`
  background-color: #fefefe;
  border-radius: 0;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.5);
  transform: translateY(3em);
  transition: transform 0.2s ease-in-out;
  width: 100%;
  z-index: 997;

  a {
    color: var(--green-500);
    text-decoration: none;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const CloseButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 1em;
  top: 1em;
  z-index: 3;

  svg {
    color: black;
    fill: ${({ theme }) =>
      theme === "light" ? "var(--green-500)" : "var(--green-70)"};
    cursor: pointer;
    font-size: 2.5em;
    font-weight: 400;
    height: 1em;
    line-height: 2.5em;
    text-shadow: none;
    transition: fill 0.1s linear;
    width: 1em;
    z-index: 998;
  }

  &:hover,
  &:active,
  &:focus {
    svg {
      fill: ${({ theme }) => (theme === "light" ? "#000" : "var(--green-40)")};
    }
  }

  @media (max-width: 1023px) {
    svg {
      font-size: 1.5em;
    }
  }

  @media (max-width: 767px) {
    svg {
      font-size: 1em;
    }
  }
`;

export const Modal = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: 0;
  outline: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-in-out;
  width: 80%;
  z-index: 999;

  &.fade-in {
    opacity: 1;
    /* transition: opacity var(--desktop-enter) var(--decelerated-curve); */

    ${Dialog} {
      transition: transform 0.2s ease-in-out;
      transform: translateY(0);
    }
  }

  &.fade-out {
    opacity: 0;
    /* transition: opacity var(--desktop-exit) var(--accelerated-curve); */

    ${Dialog} {
      transform: translateY(3em);
    }
  }

  @media (max-width: 1023px) {
    ${CloseButton} {
      right: 0;
      top: 0;
    }

    ${Dialog} {
      padding: 2em;
    }
  }
`;
