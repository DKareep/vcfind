import PageHero from "../../Components/PageHero/PageHero";
import InvestorCard from "../../Components/InvestorCard/InvestorCard";

const Europe = () => {
  return (
    <div>
      <PageHero title={"Europe"} />

      <InvestorCard />
      <InvestorCard />
      <InvestorCard />
    </div>
  );
};

export default Europe;
