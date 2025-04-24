// src/components/CryptoTable.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../features/crypto/cryptoSlice';
import styled from 'styled-components';
import mockWebSocket from '../services/mockWebSocket';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`;

const Th = styled.th`
  background-color: #f8f9fa;
  padding: 10px 8px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 500;
  color: #495057;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 10px 8px;
  border-bottom: 1px solid #e0e0e0;
  white-space: nowrap;
  color: #343a40;
`;

const Rank = styled.span`
  color: #6c757d;
  font-size: 0.8rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Light grey background */
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: bold;
  color: #333;
`;

const NameSymbol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
`;

const Symbol = styled.span`
  color: #6c757d;
  font-size: 0.8rem;
`;

const Price = styled.span`
  font-weight: 500;
  text-align: right;
`;

const Change = styled.span`
  color: ${(props) => (props.value > 0 ? '#28a745' : '#dc3545')};
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: right;

  &::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    ${(props) =>
      props.value > 0
        ? 'border-bottom: 4px solid #28a745;'
        : 'border-top: 4px solid #dc3545;'}
  }
`;

const MarketCap = styled.span`
  color: #495057;
  font-size: 0.875rem;
  text-align: right;
`;

const Volume = styled.span`
  color: #495057;
  font-size: 0.875rem;
  text-align: right;
`;

const CirculatingSupply = styled.span`
  color: #495057;
  font-size: 0.875rem;
  text-align: right;
`;

const MaxSupply = styled.span`
  color: #6c757d;
  font-size: 0.8rem;
  text-align: right;
`;

const ChartContainer = styled.div`
  width: 100px;
  height: 30px;
`;

const ResponsiveContainer = styled.div`
  overflow-x: auto;
`;

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  useEffect(() => {
    mockWebSocket.connect();

    return () => {
      mockWebSocket.disconnect();
    };
  }, []);

  return (
    <ResponsiveContainer>
      <Table>
        <thead>
          <tr>
            <Th style={{ width: '40px' }}>#</Th>
            <Th>Name</Th>
            <Th style={{ textAlign: 'right' }}>Price</Th>
            <Th style={{ textAlign: 'right' }}>1h %</Th>
            <Th style={{ textAlign: 'right' }}>24h %</Th>
            <Th style={{ textAlign: 'right' }}>7d %</Th>
            <Th style={{ textAlign: 'right' }}>Market Cap</Th>
            <Th style={{ textAlign: 'right' }}>Volume(24h)</Th>
            <Th style={{ textAlign: 'right' }}>Circulating Supply</Th>
            <Th style={{ textAlign: 'right' }}>Max Supply</Th>
            <Th style={{ textAlign: 'right' }}>7D Chart</Th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <Td><Rank>{index + 1}</Rank></Td>
              <Td>
                <LogoContainer>
                  <Logo>{asset.symbol}</Logo> {/* Display symbol as logo */}
                  <NameSymbol>
                    <Name>{asset.name}</Name>
                    <Symbol>{asset.symbol}</Symbol>
                  </NameSymbol>
                </LogoContainer>
              </Td>
              <Td><Price>${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Price></Td>
              <Td><Change value={asset['1h']}>{asset['1h']}%</Change></Td>
              <Td><Change value={asset['24h']}>{asset['24h']}%</Change></Td>
              <Td><Change value={asset['7d']}>{asset['7d']}%</Change></Td>
              <Td><MarketCap>${asset.marketCap.toLocaleString(undefined, { notation: 'compact' })}</MarketCap></Td>
              <Td><Volume>${asset['24hVolume'].toLocaleString(undefined, { notation: 'compact' })}</Volume></Td>
              <Td><CirculatingSupply>{asset.circulatingSupply.toLocaleString(undefined, { notation: 'compact' })} {asset.symbol}</CirculatingSupply></Td>
              <Td><MaxSupply>{asset.maxSupply === Infinity ? '∞' : `${asset.maxSupply.toLocaleString(undefined, { notation: 'compact' })} ${asset.symbol}`}</MaxSupply></Td>
              <Td>
                <ChartContainer>
                  <Sparklines data={asset.historicalData || [0, 0]} height={30} width={100}>
                    <SparklinesLine color={asset['7d'] > 0 ? '#28a745' : '#dc3545'} />
                  </Sparklines>
                </ChartContainer>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ResponsiveContainer>
  );
};

export default CryptoTable;