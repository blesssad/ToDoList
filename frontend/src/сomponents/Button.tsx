import styled from '@emotion/styled';
import React from 'react';

type ButtonProps = {
    children: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonDiv = styled.button`
  height: 24px;
  width: 80px;
  border: 0px;
  border-radius: 6px;
  &:active {
    opacity: 0.8;
  }
`

function Button({onClick, children}: ButtonProps) {
  return (
    <ButtonDiv onClick={onClick}>
        {children}
    </ButtonDiv>
  );
}

export default Button;