// src/features/crypto/cryptoSlice.js
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { generateMockCryptoData } from '../../utils/mockData';

const initialState = {
  assets: generateMockCryptoData(6), // Initialize with 6 assets as in the screenshot
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoData: (state, action) => {
      state.assets = state.assets.map((asset) =>
        asset.symbol === action.payload.symbol ? { ...asset, ...action.payload } : asset
      );
    },
  },
});

export const { updateCryptoData } = cryptoSlice.actions;

// Selectors
export const selectAllAssets = (state) => state.crypto.assets;

export default cryptoSlice.reducer;