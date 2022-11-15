import styled from '@emotion/styled';
import React from 'react';
import AuthPage from './pages/AuthPage';

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`

function App() {
  return (
    <AppDiv>
      <AuthPage/>
    </AppDiv>
  );
}

export default App;
