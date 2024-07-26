import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  account: accountReducer,
  customer: customerReducer,
});

export default store;
