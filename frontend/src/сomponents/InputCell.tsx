import styled from '@emotion/styled';
import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

const Input = styled.input`
  height: 24px;
  border: 0px;
  border-radius: 6px;
`

function InputCell() {
  const [value, setValue] = React.useState('');
  console.log(value)

  return (
    <Input type='text' value={value} onChange={(e) => {setValue(e.target.value)}}/>
  );
}

export default InputCell;