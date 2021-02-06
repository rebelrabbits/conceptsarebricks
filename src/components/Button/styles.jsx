import styled, { css } from "styled-components";

const primaryCSS = css`
  background-color: var(--blue-dark);
  border: solid 2px var(--blue-dark);
  color: #fff;

  &:hover {
    color: #ffffff;
    background-color: rgba(0, 104, 122, 0.7);
    border-color: rgba(0, 104, 122, 0.7);
  }
`;

const transparentPrimaryCSS = css`
  background-color: rgba(0, 0, 0, 0);
  border: solid 2px var(--blue-dark);
  color: var(--blue-dark);

  &:hover {
    color: #ffffff;
    background-color: var(--blue-dark);
    border-color: var(--blue-dark);
  }
`;

const whiteCSS = css`
  background-color: #fff;
  border: solid 2px #fff;
  color: var(--blue-dark);

  &:hover {
    color: #ffffff;
    background-color: var(--blue-dark);
    border-color: var(--blue-dark);
  }
`;

const transparentwhiteCSS = css`
  background-color: rgba(0, 0, 0, 0);
  border: solid 2px #fff;
  color: #fff;

  &:hover {
    color: #ffffff;
    background-color: var(--blue-dark);
    border-color: var(--blue-dark);
  }
`;

const tagCSS = css`
  background-color: rgba(26, 108, 122, 0.14);
  border: solid 2px var(--blue-dark);
  border-radius: 0.5rem;
  color: var(--blue-dark);
  font-size: 0.89em;
  padding: 0.5em 1em;
  text-transform: capitalize;

  &:hover {
    color: #ffffff;
    background-color: var(--blue-dark);
    border-color: var(--blue-dark);
  }
`;

export const StyledButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  font-family: var(--primary-font);
  font-weight: var(--button-font-weight);
  letter-spacing: 2px;
  line-height: 1;
  outline: none;
  padding: 16px 40px;
  text-transform: uppercase;
  transition: all 0.2s linear;
  ${({ variant }) => variant === "primary" && primaryCSS}
  ${({ variant }) => variant === "white" && whiteCSS}
  ${({ variant }) => variant === "transparentP" && transparentPrimaryCSS}
  ${({ variant }) => variant === "transparentW" && transparentwhiteCSS}
  ${({ variant }) => variant === "tag" && tagCSS}

  a {
    color: inherit;
    text-decoration: none;
  }
`;
