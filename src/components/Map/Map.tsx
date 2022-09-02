import React, { useEffect, useState } from 'react';
import {
  Map as MapGL,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';
import { Button } from '../Button';

const TOKEN =
  'pk.eyJ1IjoiZ3JhbmRtaXgiLCJhIjoiY2w3aTl1ZjNrMG05cjNvcGJ0emw1bm5zeiJ9.g-kvvfvB5oQvA6chdO3iEA';

const Map = () => {
  const [isMarkerAddingMode, setIsMarkerAddingMode] = useState(false);
  const markersCoords = [];

  const onClick = (e: any) => {
    if (isMarkerAddingMode) {
      console.log('bla');
    }
    console.log(e);
  };

  useEffect(() => {}, [isMarkerAddingMode]);

  const enableAddMarkerMode = () => {
    setIsMarkerAddingMode(!isMarkerAddingMode);
  };

  return (
    <>
      <MapGL
        onClick={onClick}
        initialViewState={{
          latitude: 52.52,
          longitude: 13.4,
          zoom: 12.5,
          bearing: 0,
          pitch: 0,
        }}
        mapboxAccessToken={TOKEN}
        style={{ height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
      </MapGL>
      <Button onClick={enableAddMarkerMode}>{`${
        isMarkerAddingMode ? 'Stop' : 'Start'
      } creating plan`}</Button>
    </>
  );
};

export default Map;
