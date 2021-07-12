import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import { getLaunches, getRockets } from "../services/SpacexService";

import Home from "./screens/Home";
import { SpacexContext } from "./context";

import "./styles.css";

export default function App() {
  const [launchesAndRockets, setLaunchesAndRockets] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!launchesAndRockets) {
        const launches = await getLaunches().then(response => response.data);
        const rockets = await getRockets().then(response => response.data);

        const newUpdatedLaunches = launches.map(launch => {
          const rocketMissingInfo = rockets.find(rocket => rocket.rocket_id === launch.rocket.rocket_id);
          launch.rocket = { ...launch.rocket, ...rocketMissingInfo };
          return launch;
        });

        const sortedNewUpdatedLaunches = newUpdatedLaunches.sort((updatedLaunchA, updatedLaunchB) => {
          if (updatedLaunchA.launch_date_utc > updatedLaunchB.launch_date_utc) {
            return -1;
          } else if (updatedLaunchA.launch_date_utc < updatedLaunchB.launch_date_utc) {
            return 1;
          }
          return 0;
        });

        setLaunchesAndRockets(sortedNewUpdatedLaunches);
      }
    }
    fetchData();
  }, [launchesAndRockets]);

  return (
    <SpacexContext.Provider value={launchesAndRockets}>
      {!launchesAndRockets ? (
        <div className="loader-container">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        <Home />
      )}
    </SpacexContext.Provider>
  );
}
