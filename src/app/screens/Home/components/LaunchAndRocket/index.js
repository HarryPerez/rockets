
import './styles.css';

function LaunchdAndRocket({ launchAndRocket }) {
  const { flight_number, mission_name, launch_date_utc } = launchAndRocket;

  return (
    <div className="launch-rocket-container">
      <span>{`Flight Number #${flight_number}`}</span>
      <span>{`Mission Name - ${mission_name}`}</span>
      <span>{`Launch Date - ${new Date(launch_date_utc).toString()}`}</span>
    </div>
  );
}

export default LaunchdAndRocket;
