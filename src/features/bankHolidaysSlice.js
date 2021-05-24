import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { bankHolidaysURL } from '../api/endpoints';
import { httpClient } from '../api/http.client';

const initialState = {
  holidaysData: null,
  loading: false,
  selectedCountry: null,
};

export const fetchBankHolidays = createAsyncThunk(
  'bankHolidays/fetchBankHolidays',
  async () => {
    return httpClient.get(bankHolidaysURL).then((response) => {
      return response;
    });
  },
);

const bankHolidaysSlice = createSlice({
  name: 'bankHolidays',
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: {
    [fetchBankHolidays.pending]: (state) => {
      state.loading = true;
    },
    [fetchBankHolidays.fulfilled]: (state, action) => {
      state.loading = false;
      state.holidaysData = action.payload.data;
    },
  },
});

// Selectors:
export const getBankHolidays = (state) => state.bankHolidays;

// Actions
export const { setSelectedCountry } = bankHolidaysSlice.actions;

// Reducer
export default bankHolidaysSlice.reducer;
