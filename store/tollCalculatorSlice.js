// store/tollCalculatorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  routeData: null,
  markersData: [], 
};

const tollCalculatorSlice = createSlice({
  name: 'tollCalculator',
  initialState,
  reducers: {
    setRouteData: (state, action) => {
      state.routeData = action.payload;
    },
    setMarkersData: (state, action) => {
      state.markersData = action.payload;
    },
  },
});

export const { setRouteData, setMarkersData } = tollCalculatorSlice.actions;
export default tollCalculatorSlice.reducer;
