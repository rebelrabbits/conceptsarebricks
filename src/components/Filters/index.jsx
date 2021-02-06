import React from "react";
import { Wrapper, FilterWrapper } from "./styles";

const Filters = ({ children }) => {
  return (
    <Wrapper>
      <h3>Filters</h3>
      <FilterWrapper>{children}</FilterWrapper>
    </Wrapper>
  );
};

export default Filters;
