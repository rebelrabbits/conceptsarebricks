import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 1em;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Article = styled.article`
  border: 1px solid var(--blue-gray);
  width: 100%;

  a {
    transition: all 0.2s linear;
    &:hover {
      color: #222;
    }
  }
`;

export const Body = styled.div`
  padding: 1em;
  position: relative;
  width: 100%;
`;

export const Header = styled.header`
  h2 {
    color: var(--blue-gray);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 0.35em;
    a {
      color: inherit;
    }
  }

  p {
    color: var(--secondary);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
`;

export const Tags = styled.div`
  a {
    margin-right: 0.5em;
  }
`;
