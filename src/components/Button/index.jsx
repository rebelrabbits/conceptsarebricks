import React from "react";
import { StyledButton } from "./styles";

const Button = ({ variant = "primary", children, onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
