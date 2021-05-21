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
  },
};

// Billing
export const fetchBankHolidays = createAsyncThunk(
  'bankHolidays/fetchBankHolidays',
  async () => {
    return await bankHolidays();
  },
);

const paymentsSlice = createSlice({
  name: 'bankHolidays',
  initialState,
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
// promo code information
export const getBankHolidays = (state) => state.bankHolidays.holidays;

// Reducer
export default paymentsSlice.reducer;
