import { configureStore } from '@reduxjs/toolkit';
import bankHolidaysReducer from '../features/bankHolidaysSlice';

export default configureStore({
  reducer: {
    bankHolidays: bankHolidaysReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
