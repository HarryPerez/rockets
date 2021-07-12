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

        setLaunchesAndRockets(newUpdatedLaunches);
      }
    }
    fetchData();
  }, [launchesAndRockets]);

  console.log({ launchesAndRockets });

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
