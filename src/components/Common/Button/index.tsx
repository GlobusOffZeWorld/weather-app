import { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './style';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
  datatype
}) => (
  <StyledButton
    onClick={onClick}
    data-cy={datatype}
  >
    {children}
  </StyledButton>
);
