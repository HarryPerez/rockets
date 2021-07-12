import { useContext, useState } from "react";
import { SpacexContext } from "../../context";

import SearchBar from './components/SearchBar';
import LaunchAndRocket from './components/LaunchAndRocket';

import './styles.css';

function Home() {
  const [filter, setFilter] = useState('');
  const launchesAndRockets = useContext(SpacexContext);
  const onHandleChange = (launchName) => setFilter(launchName);

  const filteredLaunchesAndRockets = filter !== '' ? launchesAndRockets.filter(launchAndRocket => launchAndRocket.mission_name.includes(filter)) : launchesAndRockets;

  return (
    <div className="home-container">
      <SearchBar onHandleChange={onHandleChange} />
      {filteredLaunchesAndRockets.map(launchAndRocket => <LaunchAndRocket launchAndRocket={launchAndRocket} />)}
    </div>
  );
};

export default Home;
