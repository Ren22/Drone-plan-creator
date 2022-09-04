import React, { useState } from 'react';
import { useMapEvents, Marker, FeatureGroup, Polyline } from 'react-leaflet';
import L, { Icon } from 'leaflet';

const LocationMarkers = () => {
  const [markers, setMarkers] = useState<L.LatLng[]>([]);

  useMapEvents({
    click(e) {
      markers.push(e.latlng);
      setMarkers((prevValue) => [...prevValue, e.latlng]);
    },
  });

  return (
    <React.Fragment>
      <FeatureGroup>
        {markers.map((marker, i) => (
          <Marker position={marker} key={i} icon={customMarkerUserPos}></Marker>
        ))}
        <Polyline positions={markers} color="red" />
      </FeatureGroup>
    </React.Fragment>
  );
};

export const customMarkerUserPos = new Icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png?20181031002712',
  iconSize: [10, 10],
  iconAnchor: [5, 5],
  popupAnchor: [2, -40],
});

export default LocationMarkers;
