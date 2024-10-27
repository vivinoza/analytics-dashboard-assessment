import LocationTable from "./LocationTable";
import MakeDistributionChart from "./MakeDistributionChart";
import RangeDistributionChart from "./RangeDistributionChart";
import data from "../../data-to-visualize/Electric_Vehicle_Population_Data.json";
import {
  getRangeDistribution,
  getMakeDistribution,
  getCountyDistribution,
} from "./Utils/evUtils";

const Dashboard = () => {
  const getTotalEVCount = data.length;
  const getEVCountByMake = getMakeDistribution(data);
  const getEVCountByRange = getRangeDistribution(data);
  const getEVCountByCounty = getCountyDistribution(data);

  return (
    <div>
      <h1>Electric Vehicle Population Dashboard</h1>
      <h2>Total EVs: {getTotalEVCount}</h2>
      <h2>EV Distribution by Make</h2>
      <MakeDistributionChart data={getEVCountByMake} />
      <h2>EV Distribution by Electric Range</h2>
      <RangeDistributionChart data={getEVCountByRange} />
      <h2>EV Geographic Distribution by County</h2>
      <LocationTable data={getEVCountByCounty} />
    </div>
  );
};

export default Dashboard;
