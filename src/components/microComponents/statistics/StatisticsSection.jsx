import ClientStatistic from "./ClientStatistic";
import CompleteProject from "./CompleteProject";
import PositiveRating from "./PositiveRating";

const StatisticsSection = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ClientStatistic />
        <CompleteProject />
        <PositiveRating />
      </div>
    </div>
  );
};

export default StatisticsSection;
