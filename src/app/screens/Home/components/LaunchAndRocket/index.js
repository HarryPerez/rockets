import React, { useState } from 'react';

import './styles.css';

function LaunchdAndRocket({ launchAndRocket }) {
  const [isActive, setIsActive] = useState(false);
  const { flight_number, mission_name, launch_date_utc, details, rocket: { rocket_name } } = launchAndRocket;

  const onHandleActive = () => setIsActive(!isActive);

  return (
    <div onClick={onHandleActive} className="launch-rocket-container" >
      <span>{`Flight Number #${flight_number}`}</span>
      <span>{`Mission Name - ${mission_name}`}</span>
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
