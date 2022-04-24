import React from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

function LocationMarker({ location, setActivePark }) {
  const map = useMapEvents({});

  return (
    <Marker
      position={[location.LATITUDE, location.LONGITUDE]}
      eventHandlers={{
        click: (e) => {
          setActivePark(location);
          map.flyTo(e.latlng, 16);
        },
      }}
    ></Marker>
  );
}

export default LocationMarker;
