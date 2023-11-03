import { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./style";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
)
