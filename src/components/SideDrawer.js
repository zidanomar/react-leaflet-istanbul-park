import React, { useState } from 'react';
import { useMapEvents } from 'react-leaflet';

function SideDrawer({ locations, activePark, setActivePark }) {
  const map = useMapEvents({});

  const [filteredList, setFilteredList] = useState(locations);

  const onSelectedPark = (location) => {
    map.flyTo([location.LATITUDE, location.LONGITUDE], 16);
    setActivePark(location);
  };

  const searchHandler = (e) => {
    setFilteredList(
      locations.filter((park) =>
        park.COUNTY_NAME.toLocaleUpperCase().includes(
          e.target.value.toLocaleUpperCase()
        )
      )
    );
  };

  return (
    <div className='drawer'>
      <div className='drawer__search'>
        <input onChange={searchHandler} placeholder='search county' />
      </div>
      <ul className='drawer__list'>
        {filteredList.map((location) => (
          <li
            className={activePark?._id === location._id ? 'active-list' : ''}
            key={location._id}
            onClick={() => onSelectedPark(location)}
          >
            <h5>{location.NAME}</h5>
            <small>{location.COUNTY_NAME}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideDrawer;
