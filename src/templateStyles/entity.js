import styled from "styled-components";

export const ImgWrapper = styled.div`
  margin-bottom: 2em;
  grid-area: image;
`;
export const Social = styled.div`
  grid-area: social;
  margin-bottom: 2em;

  ul {
    li {
      align-items: center;
      display: flex;
      justify-content: flex-start;

      margin-bottom: 0.5em;
      p {
        margin: 0;
      }
    }
  }
`;

export const Overview = styled.div`
  grid-area: overview;
  margin: 2em 0;
`;
export const ByLine = styled.div`
  grid-area: byline;
  margin-bottom: 2em;
`;
export const Tags = styled.div`
  grid-area: tags;
  margin-bottom: 2em;
`;

export const Grid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 3em;
    grid-auto-rows: auto;
    grid-template-columns: 30% 70%;
    width: calc(100% - 3em);
  }
`;
