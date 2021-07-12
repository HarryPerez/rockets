import React, { useState } from 'react';

import './styles.css';

function LaunchdAndRocket({ launchAndRocket, onHandleToFav }) {
  const [isActive, setIsActive] = useState(false);
  const { flight_number, mission_name, launch_date_utc, details, rocket: { rocket_name }, isFav } = launchAndRocket;

  const onHandleActive = () => setIsActive(!isActive);

  const onHandleFav = () => {
    onHandleToFav(mission_name);
  };

  return (
    <div onClick={onHandleActive} className="launch-rocket-container" >
      <span>{`Flight Number #${flight_number}`}</span>
      <button type="button" onClick={onHandleFav}>{isFav ? 'Remove' : 'Add to fav'}</button>
      < span > {`Mission Name - ${mission_name}`}</span>
      <span>{`Launch Date - ${new Date(launch_date_utc).toString()}`}</span>
      {isActive && (
        <>
          {details && (
            <>
              <span className="section">Launch Details</span>
              <span>{details}</span>
            </>
          )}
          <span className="section">Rocket Info</span>
          <span>{`${rocket_name}`}</span>
        </>
      )}
    </ div>
  );
}

export default LaunchdAndRocket;
