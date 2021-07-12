
import './styles.css';

function LaunchdAndRocket({ launchAndRocket }) {
  console.log(launchAndRocket);
  const { flight_number, mission_name, launch_date_local } = launchAndRocket;
  return (
    <div className="launch-rocket-container">
      <span>{`Flight Number #${flight_number}`}</span>
      <span>{`Mission Name - ${mission_name}`}</span>
      <span>{`Launch Date - ${launch_date_local}`}</span>
    </div>
  );
}

export default LaunchdAndRocket;
