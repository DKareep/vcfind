import PageHero from "../../Components/PageHero/PageHero";
import InvestorCard from "../../Components/InvestorCard/Euro/InvestorCard";
import { useAppDispatch, useAppSelector } from "../../Store";
import { useEffect } from "react";
import { fetchEuroInvestors } from "../../Store/Slices/EuroInvestors";

const Europe = () => {
  const euroState = useAppSelector((state) => state.euro);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEuroInvestors());
  }, [dispatch]);

  return (
    <div>
      <PageHero title={"Europe"} />
      {euroState.data_euro.map(
        (
          { Investor, Overview }: { Investor: string; Overview: string },
          idx,
        ) => {
          return (
            <InvestorCard
              key={Investor + idx}
              companyName={Investor}
              description={Overview}
            />
          );
        },
      )}

      {/*<InvestorCard />*/}
      {/*<InvestorCard />*/}
    </div>
  );
};

export default Europe;
