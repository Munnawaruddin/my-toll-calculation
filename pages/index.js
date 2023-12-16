// pages/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import CalculateTollButton from '../components/CalculateTollButton';
import TollCalculationGuide from '../components/TollCalculationGuide';
import TollCalculatorMap from '../components/TollCalculatorMap';
import TollMarker from '../components/TollMarker';
import { decodePolyline } from '../utils/polylineDecoder';
import { setRouteData, setMarkersData } from '../store/tollCalculatorSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const routeData = useSelector((state) => state.tollCalculator.routeData);
  const markersData = useSelector((state) => state.tollCalculator.markersData);
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleCalculateToll = async () => {
    try {
      const response = await fetchTollData(startLocation, endLocation);
      const { route, markers } = response.data;

      dispatch(setRouteData(route));
      dispatch(setMarkersData(markers));
    } catch (error) {
      console.error('Error calculating toll:', error.message);
    }
  };

  const fetchTollData = async (startLocation, endLocation) => {
    const apiUrl = 'your-toll-api-endpoint';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ startLocation, endLocation }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch toll data: ${response.statusText}`);
    }

    return response.json();
  };

  return (
    <div>
      <Header />
      <CalculateTollButton onClick={handleCalculateToll} />
      <TollCalculationGuide guideContent="Learn about toll calculations and factors affecting toll costs." />
      <TollCalculatorMap routeData={routeData} markersData={markersData} />
      <TollMarker position={[37.7749, -122.4194]} tollInfo="Cost: $5.00
      -Payment Methods: Cash, Credit Card, E-ZPass
- Location: Main Street Toll Plaza
- Vehicle Types: Cars, Trucks
- Time of Day: Standard Rates (No time-dependent variations)
- Discounts: None
" />
    </div>
  );
};

export default HomePage;

