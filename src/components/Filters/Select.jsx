import React, { useState, useEffect } from "react";
import { Multiselect } from "react-widgets";
import { get, uniq, startCase } from "lodash";

const Filters = ({
  data,
  callback,
  filterName,
  dataIsInitial = false,
  placeholder = "Choose from...",
}) => {
  const initialState = dataIsInitial
    ? data
    : uniq(
        data
          .map((item) => get(item, `node.frontmatter.${filterName}`, null))
          .flat(),
      );
  // const [state, setState] = useState([]);
  // useEffect(() => {
  //   if (callback) {
  //     callback(state);
  //   }
  // }, [state]);
  return (
    <div>
      <Multiselect
        data={initialState}
        // value={state}
        textField={(item) => startCase(item)}
        placeholder={placeholder}
        onChange={callback(filterName)}
        filter='contains'
      />
    </div>
  );
};

export default Filters;
