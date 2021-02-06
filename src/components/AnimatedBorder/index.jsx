import React from "react";

import { Box, Vertical, Horizontal } from "./styles";

const AnimatedBorder = ({ topRight = false, isActive = false }) => {
  return (
    <Box topRight={topRight} isActive={isActive}>
      <div>
        <Vertical />
        <Horizontal />
      </div>
    </Box>
  );
};

export default AnimatedBorder;
