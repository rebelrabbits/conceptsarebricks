/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { DateTimePicker } from "react-widgets";

import Moment from "moment";
import momentLocalizer from "react-widgets-moment";

Moment.locale("en");
momentLocalizer();

const Date = ({
  callback,
  filterName,
  placeholder = "Choose by month published",
}) => {
  return (
    <div>
      <DateTimePicker
        culture='en'
        date={true}
        format='MMMM YYYY'
        time={false}
        views={["year"]}
        placeholder={placeholder}
        onChange={callback(filterName)}
      />
    </div>
  );
};

export default Date;
