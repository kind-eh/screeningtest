import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  FETCH_STATUS_FAILED,
  FETCH_STATUS_LOADING,
  FETCH_STATUS_SUCCESS,
} from './constants';
import { bankHolidays } from '../api/bankHolidaysApi';

const initialState = {
  holidays: {
    holidaysData: null,
    status: 'idle',
    selectedCountry: null,
  },
};

export const fetchBankHolidays = createAsyncThunk(
  'bankHolidays/fetchBankHolidays',
  async () => {
    return await bankHolidays();
  },
);

const bankHolidaysSlice = createSlice({
  name: 'bankHolidays',
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.holidays.selectedCountry = action.payload;
    },
  },
  extraReducers: {
    [fetchBankHolidays.pending]: (state) => {
      state.holidays.status = FETCH_STATUS_LOADING;
    },
    [fetchBankHolidays.fulfilled]: (state, action) => {
      state.holidays.status = FETCH_STATUS_SUCCESS;
      state.holidays.holidaysData = action.payload.data;
    },
    [fetchBankHolidays.rejected]: (state, action) => {
      state.holidays.status = FETCH_STATUS_FAILED;
      state.holidays.error = action.error;
    },
  },
});

// Selectors:
export const getBankHolidays = (state) => state.bankHolidays.holidays;

// Actions
export const { setSelectedCountry } = bankHolidaysSlice.actions;

// Reducer
export default bankHolidaysSlice.reducer;
