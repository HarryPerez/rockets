import { useContext } from "react";
import { SpacexContext } from "../../context";

import LaunchAndRocket from './components/LaunchAndRocket';

import './styles.css';

function Home() {
  const launchesAndRockets = useContext(SpacexContext);

  return (
    <div className="home-container">
      {launchesAndRockets.map(launchAndRocket => <LaunchAndRocket launchAndRocket={launchAndRocket} />)}
    </div>
  );
}

export default Home;
