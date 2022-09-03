import React, { useEffect, useState } from 'react';
import InteractiveMap, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  MapLayerMouseEvent,
  Marker,
} from 'react-map-gl';
import { Button } from '../Button';

interface LngLat {
  longitude: number;
  latitude: number;
}

const TOKEN =
  'pk.eyJ1IjoiZ3JhbmRtaXgiLCJhIjoiY2w3aTl1ZjNrMG05cjNvcGJ0emw1bm5zeiJ9.g-kvvfvB5oQvA6chdO3iEA';

const Map = () => {
  const [isMarkerAddingMode, setIsMarkerAddingMode] = useState(true);
  const [markers, setMarkersCoords] = useState<LngLat[]>([]);

  const handleClick = (e: MapLayerMouseEvent) => {
    if (isMarkerAddingMode) {
      const lng = e.lngLat.lng;
      const lat = e.lngLat.lat;
      setMarkersCoords((markers) => [...markers, { longitude: lng, latitude: lat }]);
    } else {
      console.log('No action');
    }
  };

  useEffect(() => {}, [isMarkerAddingMode]);

  const enableAddMarkerMode = () => {
    setIsMarkerAddingMode(!isMarkerAddingMode);
  };

  return (
    <>
      <InteractiveMap
        onClick={handleClick}
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
        {markers.map((m, i) => (
          <Marker {...m} key={i} />
        ))}
      </InteractiveMap>
      <Button onClick={enableAddMarkerMode}>{`${
        isMarkerAddingMode ? 'Stop' : 'Start'
      } creating plan`}</Button>
    </>
  );
};

export default Map;
