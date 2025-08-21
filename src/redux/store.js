import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import applicationReducer from './applicationSlice';

const store = configureStore ({
  reducer: {
    applications: applicationReducer,
  },
});

export default store
