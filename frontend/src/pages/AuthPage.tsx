import styled from '@emotion/styled';
import React from 'react';
import InputCell from '../сomponents/InputCell';
import Button from '../сomponents/Button';

const AuthDiv = styled.div`
    height: 300px;
    width: 600px;
    border-radius: 12px;
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #a7a7a7;
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.2);
` 


function AuthPage() {
  return (
    <AuthDiv>
      <InputCell />
      <Button onClick={() => console.log("Button")}>Кнопка</Button>
    </AuthDiv>
  );
}

export default AuthPage;