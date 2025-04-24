// src/services/mockWebSocket.js
import { store } from '../../src/app/store'; // Explicitly go to src/
import { updateCryptoData } from '../../src/features/crypto/cryptoSlice'; // Explicitly go to src/
import { faker } from '@faker-js/faker';

class MockWebSocket {
  constructor() {
    this.intervalId = null;
  }

  connect() {
    this.intervalId = setInterval(() => {
      const allAssets = store.getState().crypto.assets;
      const randomIndex = Math.floor(Math.random() * allAssets.length);
      const randomAsset = allAssets[randomIndex];

      const priceChange = parseFloat(faker.finance.amount(-0.5, 0.5, 2));
      const price = parseFloat((randomAsset.price + priceChange).toFixed(2));
      const priceChange1h = parseFloat((randomAsset['1h'] + parseFloat(faker.finance.amount(-0.2, 0.2, 2))).toFixed(2));
      const priceChange24h = parseFloat((randomAsset['24h'] + parseFloat(faker.finance.amount(-0.4, 0.4, 2))).toFixed(2));
      const priceChange7d = parseFloat((randomAsset['7d'] + parseFloat(faker.finance.amount(-0.6, 0.6, 2))).toFixed(2));
      const volume24hChange = parseFloat(faker.finance.amount(-500000, 500000, 2));
      const volume24h = parseFloat((randomAsset['24hVolume'] + volume24hChange).toFixed(2));

      store.dispatch(
        updateCryptoData({
          symbol: randomAsset.symbol,
          price,
          '1h': priceChange1h,
          '24h': priceChange24h,
          '7d': priceChange7d,
          '24hVolume': volume24h,
        })
      );
    }, 1500);
  }

  disconnect() {
    clearInterval(this.intervalId);
  }
}

const mockWebSocket = new MockWebSocket();
export default mockWebSocket;