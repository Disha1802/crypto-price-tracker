import React from 'react';
import CryptoTable from './components/CryptoTable';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
`;

const App = () => {
  return (
    <AppContainer>
      <h1>Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </AppContainer>
  );
};

export default App;