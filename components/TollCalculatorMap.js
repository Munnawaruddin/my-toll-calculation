// components/TollCalculatorMap.js
import React from 'react';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

function TollCalculatorMap({ routeData, markersData }) {
  const defaultCenter = [37.7749, -122.4194]; // Example coordinates for San Francisco
  const defaultZoom = 10;

  const encodedPolyline = routeData?.encodedPolyline;
  const decodedPolyline = encodedPolyline ? decodePolyline(encodedPolyline) : [];

  const renderMarkers = () => {
    return markersData.map((marker, index) => (
      <Marker key={index} position={marker.position}>
        <Popup>{marker.tollInfo}</Popup>
      </Marker>
    ));
  };

  return (
    <Map center={defaultCenter} zoom={defaultZoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Render route polyline */}
      <Polyline positions={decodedPolyline} color="blue" />
      {/* Render markers along the route */}
      {renderMarkers()}
    </Map>
  );
}

export default TollCalculatorMap;
