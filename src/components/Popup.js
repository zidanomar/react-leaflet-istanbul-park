import React, { useRef } from 'react';
import { Popup as LeafletPopup, useMapEvents } from 'react-leaflet';

import { ReactComponent as Cross } from '../xmark-solid.svg';

function Popup({ activePark }) {
  const popupElRef = useRef();
  const map = useMapEvents({});

  const closePopupHandler = () => {
    if (!popupElRef.current || !map) return;
    map.closePopup();
  };
  return (
    <LeafletPopup
      ref={popupElRef}
      closeButton={false}
      position={[activePark?.LATITUDE, activePark?.LONGITUDE]}
    >
      <div className='popup-container'>
        <div className='popup-close'>
          <Cross onClick={closePopupHandler} />
        </div>
        <h2 className='popup-header'>{activePark?.NAME}</h2>
        <div className='popup-body'>
          <p>{activePark?.NEIGHBORHOOD_NAME}</p>
          <p>{activePark?.COUNTY_NAME}</p>
        </div>
      </div>
    </LeafletPopup>
  );
}

export default Popup;
