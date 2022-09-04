import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationMarkers } from '../LocaltionMarkers';

const Map = () => {
  return (
    <>
      <MapContainer style={{ width: '100%' }} center={[52.52, 13.4]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarkers />
      </MapContainer>
    </>
  );
};

export default Map;
