import React from "react";
import { FilterSectionWrapper, FilterWrapper } from "./styles";

const Filters = ({ children }) => {
  return (
    <FilterSectionWrapper>
      <h3>Filters</h3>
      <FilterWrapper>{children}</FilterWrapper>
    </FilterSectionWrapper>
  );
};

export default Filters;
