import PageHero from "../../Components/PageHero/PageHero";
import InvestorCard from "../../Components/InvestorCard/US/InvestorCard";
import { useAppDispatch, useAppSelector } from "../../Store";
import { useEffect } from "react";
import { fetchUsInvestors } from "../../Store/Slices/USInvestors";

const US = () => {
  const usInvestorDetails = useAppSelector((state) => state.us);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsInvestors());
  }, [dispatch]);
  return (
    <div>
      <PageHero title={"US"} />

      {usInvestorDetails.data_us.map(
        (
          {
            FundDescription,
            companies,
          }: { FundDescription: string; companies: string },
          idx,
        ) => {
          return (
            <InvestorCard
              key={companies + idx}
              description={FundDescription}
              companyName={companies}
            />
          );
        },
      )}
    </div>
  );
};

export default US;
