import { FC, InputHTMLAttributes, RefObject } from "react";
import { StyledInput } from "./style";

interface SearchBarProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  forwardedRef: RefObject<HTMLInputElement>;
}

export const SearchBar: FC<SearchBarProps> = ({ forwardedRef, ...inputProps }) => (
  <StyledInput ref={forwardedRef} {...inputProps} />
)

