import React, { useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import Popup from './Popup';
import SideDrawer from './SideDrawer';

function Map({ locations, center, zoom }) {
  const [activePark, setActivePark] = useState(null);

  return (
    <div className='map-container'>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <SideDrawer
          locations={locations}
          setActivePark={setActivePark}
          activePark={activePark}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {locations.map((location) => (
          <LocationMarker
            key={location._id}
            location={location}
            setActivePark={setActivePark}
          />
        ))}
        {activePark && <Popup activePark={activePark} />}
        <ZoomControl position='topright' />
      </MapContainer>
    </div>
  );
}

export default Map;
