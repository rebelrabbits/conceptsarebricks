import styled, { css, keyframes } from "styled-components";

export const Fire = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  filter: url(#wavy) blur(1px);

  /* will-change: filter; */

  &:before {
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    border: 2px solid #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px var(--blue-light), inset 0 0 10px var(--blue-light);
    animation: fire 5s linear infinite;
  }

  &.isActive {
    &:after {
      opacity: 1;
    }
  }
`;

export const FireWrapper = styled.div`
  display: flex;
  border-radius: 30%;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.5s linear;
  transform: scale(1.1);
  ${Fire} {
    opacity: 0;
  }

  &.isActive {
    ${Fire} {
      opacity: 1;
    }
  }
`;
