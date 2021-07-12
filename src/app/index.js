import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import { getLaunches, getRockets } from "../services/SpacexService";

import Home from "./screens/Home";
import { SpacexContext } from "./context";

import "./styles.css";

export default function App() {
  const [launches, setLaunches] = useState(null);
  const [rockets, setRockets] = useState(null);

  useEffect(() => {
    if (!launches) {
      getLaunches().then((data) => setLaunches(data));
    }

    if (!rockets) {
      getRockets().then((data) => setRockets(data));
    }
  }, [launches, rockets]);

  return (
    <SpacexContext.Provider value={launches}>
      {!launches ? (
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
