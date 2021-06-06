import styled from "styled-components";
import { TwoCol } from "../../../styledComponents/styles";
import Modal from "../../Modal";

export const StyledModal = styled(Modal)`
  [class*="CloseButton"] {
    svg {
      fill: var(--green-70);
    }
    &:hover {
      svg {
        fill: var(--green-40);
      }
    }
  }
`;

export const Row = styled(TwoCol)`
  align-items: stretch;
  min-height: 50vh;
  height: auto;

  p {
    margin-bottom: 1em;
  }

  @media (max-width: 767px) {
    font-size: 0.89em;
  }
`;

export const Column = styled.div`
  padding: 4em;
  width: 100%;

  li {
    line-height: 1.2;
    margin-bottom: 0.6em;
  }

  &:first-child {
    background: var(--green-600);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;

    svg {
      height: 10em;
      width: 10em;
      fill: var(--green-70);
    }
  }

  &:nth-child(2) {
    align-self: center;
    padding-left: 2em;
  }
  @media (max-width: 767px) {
    padding: 2em;
    &:first-child {
      svg {
        height: 6em;
        width: 6em;
      }
    }
    &:nth-child(2) {
      padding-left: 1em;
    }
  }
`;
