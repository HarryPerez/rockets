import { useContext, useState } from "react";
import { SpacexContext } from "../../context";

import { getFavs, setFavs } from "../../../services/LocalStorageService";

import SearchBar from './components/SearchBar';
import LaunchAndRocket from './components/LaunchAndRocket';

import './styles.css';

function Home() {
  const [filter, setFilter] = useState('');
  const launchesAndRockets = useContext(SpacexContext);
  const onHandleChange = (launchName) => setFilter(launchName);

  const filteredLaunchesAndRockets = filter !== '' ? launchesAndRockets.filter(launchAndRocket => launchAndRocket.mission_name.toLowerCase().includes(filter.toLowerCase())) : launchesAndRockets;
  const onHandleToFav = (mission_name) => {
    const actualFavs = getFavs() || [];
    const favIndex = actualFavs.findIndex(fav => fav === mission_name);

    if (favIndex === -1) {
      actualFavs.push(mission_name);
      setFavs(actualFavs);
    } else {
      const withRemovedFavs = actualFavs.slice(favIndex, favIndex);
      setFavs(withRemovedFavs);
    }
  };

  return (
    <div className="home-container">
      <SearchBar onHandleChange={onHandleChange} />
      {filteredLaunchesAndRockets.map(launchAndRocket => <LaunchAndRocket launchAndRocket={launchAndRocket} onHandleToFav={onHandleToFav} />)}
    </div>
  );
};

export default Home;
