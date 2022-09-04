import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Button } from '../Button';
import 'leaflet/dist/leaflet.css';
import { LocationMarkers } from '../LocaltionMarkers';

const Map = () => {
  const [isMarkerAddingMode, setIsMarkerAddingMode] = useState(true);
  const enableAddMarkerMode = () => {
    setIsMarkerAddingMode(!isMarkerAddingMode);
  };

  return (
    <>
      <MapContainer style={{ height: '60vh' }} center={[52.52, 13.4]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarkers />
      </MapContainer>
      <Button onClick={enableAddMarkerMode}>
        {`${isMarkerAddingMode ? 'Stop' : 'Start'} creating plan`}
      </Button>
    </>
  );
};

export default Map;
