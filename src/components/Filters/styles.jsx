import styled from "styled-components";

export const FilterSectionWrapper = styled.div`
  margin: 1em 0 2em;
`;
export const FilterWrapper = styled.div`
  [class*="rw-widget"] {
    display: flex;
    .rw-widget-picker > .rw-select {
      width: auto;
    }
  }
  @media screen and (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-between;

    > * {
      flex: 1;
      &:not(:first-child) {
        margin-left: 1em;
      }
    }
  }
`;
