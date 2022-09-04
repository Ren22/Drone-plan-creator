import React from 'react';
import { useMapEvents, Marker, FeatureGroup, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addCurrentCoords, selectCurrentCoords } from '../../features/currentCoords/currentCoords';

const LocationMarkers = () => {
  const dispatch = useAppDispatch();
  const currentCoords = useAppSelector(selectCurrentCoords);

  useMapEvents({
    click(e) {
      dispatch(addCurrentCoords({ ...e.latlng }));
    },
  });

  return (
    <>
      <FeatureGroup>
        {currentCoords.map((marker, i) => (
          <Marker position={marker} key={i} icon={customMarkerUserPos}></Marker>
        ))}
        <Polyline positions={currentCoords} color="red" />
      </FeatureGroup>
    </>
  );
};

export const customMarkerUserPos = new Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png?20181031002712',
  iconSize: [10, 10],
  iconAnchor: [5, 5],
  popupAnchor: [2, -40],
});

export default LocationMarkers;
