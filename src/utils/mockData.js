// src/utils/mockData.js
import { faker } from '@faker-js/faker';

const cryptoSymbols = ['BTC', 'ETH', 'USDT', 'XRP', 'BNB', 'SOL'];
const cryptoNames = ['Bitcoin', 'Ethereum', 'Tether', 'XRP', 'Binance Coin', 'Solana'];

const generateSparklineData = () => {
  return Array.from({ length: 7 }, () => faker.number.float({ min: -500, max: 500 })); // Mock price fluctuations
};

export const generateMockCryptoData = (count = 6) => {
  return Array.from({ length: count }, (_, index) => {
    const price = parseFloat(faker.finance.amount(50, 100000, 2));
    const priceChange1h = parseFloat(faker.finance.amount(-2, 2, 2));
    const priceChange24h = parseFloat(faker.finance.amount(-5, 5, 2));
    const priceChange7d = parseFloat(faker.finance.amount(-10, 10, 2));
    const marketCap = parseFloat(faker.finance.amount(1000000000, 2000000000000, 2));
    const volume24h = parseFloat(faker.finance.amount(10000000, 5000000000, 2));
    const circulatingSupply = parseFloat(faker.finance.amount(1000000, 500000000, 2));
    const maxSupply = parseFloat(faker.datatype.boolean() ? parseFloat(faker.finance.amount(1000000, 1000000000, 0)) : Infinity);

    return {
      id: faker.string.uuid(), // Updated UUID generation
      symbol: cryptoSymbols[index % cryptoSymbols.length],
      name: cryptoNames[index % cryptoNames.length],
      price,
      '1h': priceChange1h,
      '24h': priceChange24h,
      '7d': priceChange7d,
      marketCap,
      '24hVolume': volume24h,
      circulatingSupply,
      maxSupply: maxSupply === Infinity ? '∞' : maxSupply,
      historicalData: generateSparklineData(),
    };
  });
};