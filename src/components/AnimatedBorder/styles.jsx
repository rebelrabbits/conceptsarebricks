import styled, { keyframes, css } from "styled-components";

// left, bottom 1st
const topToBottom = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;
// left, bottom 2nd
const leftToRight = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

// right, top 1st
const bottomToTop = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;
// right, top 2nd
const rightToLeft = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

export const Vertical = styled.span`
  display: block;
  height: 100%;
  position: absolute;
  width: 2px;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
export const Horizontal = styled.span`
  display: block;
  height: 2px;
  position: absolute;
  width: 100%;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const horizontalTopRightCSS = css`
  top: 0;
  right: -100%;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation-name: ${rightToLeft};
`;
const horizontalBottomLeftCSS = css`
  bottom: 0;
  left: -100%;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation-name: ${leftToRight};
`;

const noAnimationCSS = css`
  animation: none;
`;
export const Box = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100vh;
  width: 100vw;
  ${({ topRight }) => (topRight ? "top: 0;" : "bottom: 0;")}
  ${({ topRight }) => (topRight ? "right: 0;" : "left: 0;")}
> div {
    position: relative;
    height: 100%;
    width: 100%;
    transition: 0.5s;

    ${Horizontal} {
      animation-delay: 0.75s;

      ${({ topRight }) => topRight && horizontalTopRightCSS}
      ${({ topRight }) => !topRight && horizontalBottomLeftCSS}
      ${({ isActive }) => !isActive && noAnimationCSS}
    }

    ${Vertical} {
      animation-delay: 0s;

      ${({ topRight }) => topRight && verticalTopRightCSS}
      ${({ topRight }) => !topRight && verticalBottomLeftCSS}
      ${({ isActive }) => !isActive && noAnimationCSS}
    }
  }
`;

const verticalTopRightCSS = css`
  bottom: -100%;
  right: 0;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation-name: ${bottomToTop};
`;
const verticalBottomLeftCSS = css`
  top: -100%;
  left: 0;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation-name: ${topToBottom};
`;
