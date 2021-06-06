import styled from "styled-components";
import { Container } from "../../styledComponents/styles";

export const BottomContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const Top = styled.div`
  padding: 50px 0;

  h4 {
    margin-bottom: 1rem;
  }
`;

export const Branding = styled.h2`
  margin-bottom: 2rem;
`;

export const Social = styled.nav`
  ul {
    display: flex;
    li {
      a {
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 2rem;
        justify-content: center;
        margin-right: 0.5rem;
        width: 2rem;
        background: rgba(26, 108, 122, 0.14);
        transition: background 0.2s linear;

        svg {
          height: 1rem;
          width: 1rem;
          fill: var(--blue-gray);
          transition: fill 0.2s linear;
        }

        &:hover {
          background: var(--blue-gray);
          svg {
            fill: #fff;
          }
        }
      }
    }
  }
`;

export const Menu = styled.div`
  > div {
    padding-top: 1em;
  }
  @media (min-width: 768px) {
    display: flex;

    > div {
      padding-top: 0;
      padding-right: 1em;
      flex: 1;
    }
  }
`;

export const Bottom = styled.div`
  border-top: solid 1px #dbe8eb;
  p {
    color: var(--blue-gray);
    margin: 0.5em 0 !important;
  }
  a {
    text-transform: lowercase;
  }
  b:nth-child(n + 2) {
    margin-left: 1em;
  }
  > div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    p {
      margin: 0.5em 0 1em !important;
    }

    b {
      margin-left: 1em;
    }
    > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Footer = styled.footer`
  a {
    color: var(--link);
  }
`;
