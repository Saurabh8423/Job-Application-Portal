import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const applicationSlice = createSlice ({
  name: 'applications',
  initialState:[],
  reducers:{
    addApplication:(state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addApplication } = applicationSlice.actions;

export default applicationSlice
