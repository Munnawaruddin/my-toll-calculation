// utils/polylineDecoder.js
import polylineCodec from '@googlemaps/polyline-codec';

export const decodePolyline = (encodedPolyline) => {
  return polylineCodec.decode(encodedPolyline);
};
