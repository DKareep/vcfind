import PageHero from "../../Components/PageHero/PageHero";
import InvestorCard from "../../Components/InvestorCard/InvestorCard";

const US = () => {
  return (
    <div>
      <PageHero title={"US"} />

      <InvestorCard />
      <InvestorCard />
      <InvestorCard />
    </div>
  );
};

export default US;
