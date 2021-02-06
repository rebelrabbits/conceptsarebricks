import styled, { css, keyframes } from "styled-components";

export const Header = styled.header`
  background: none;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 0;
  left: 0;
  line-height: 4;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;

  a {
    color: #fff;
    display: inline-block;
    opacity: 0.75;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
    }
  }

  button a {
    opacity: 1;
  }
`;

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//     visibility: hidden;
//     z-index: 0;
//   }

//   1% {
//     opacity: 0;
//     visibility: visible;
//     z-index: 3;
//   }

//   100% {
//     opacity: 1;
//     z-index: 3;
//   }
// `;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const MobileMenu = styled.nav`
  align-items: center;
  background: rgb(64, 84, 178);
  background: linear-gradient(
    0deg,
    rgba(64, 84, 178, 1) 10%,
    rgba(110, 193, 228, 1) 33%,
    rgba(26, 108, 122, 1) 100%
  );
  display: flex;
  justify-content: center;
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  text-align: center;
  top: 0;
  visibility: hidden;
  width: 100%;
  z-index: 3;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 0.2s linear forwards;
  transition: visibility 0.2s linear;
`;

export const NavContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SiteBranding = styled.div`
  img,
  a {
    padding-left: 0;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const MobileNav = styled.div`
  position: relative;
  z-index: 4;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const isActiveCSS = css`
  span {
    &:first-child {
      transform: translateY(5px) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translateY(-5px) rotate(-45deg);
    }
  }
`;

export const Hamburger = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  outline: none;
  position: relative;
  width: 16px;
  margin-left: auto;

  span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;

    &:first-child {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }

  ${({ isActive }) => isActive && isActiveCSS};
`;

export const Nav = styled.nav`
  display: none;
  margin-left: auto;
  > ul {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding-left: 0;
    position: relative;

    li:last-child {
      a {
        padding: 0;
      }
    }
  }
  @media (min-width: 1024px) {
    display: block;
  }
`;
