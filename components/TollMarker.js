// components/TollMarker.js
import React from 'react';

function TollMarker({ position, tollInfo }) {
  return (
    <Marker position={position}>
      <Popup>
        <div>
          <h3>Toll Information</h3>
          <p>{tollInfo}</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default TollMarker;

