import PageHero from "../../Components/PageHero/PageHero";
import USInvestorCard from "../../Components/InvestorCard/US/USInvestorCard";
import { useAppDispatch, useAppSelector } from "../../Store";
import { useEffect } from "react";
import { fetchUsInvestors } from "../../Store/Slices/USInvestors";
import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loading/Loading";
import ReactPaginate from "react-paginate";

const US = () => {
  const usInvestors = useAppSelector((state) => state.us);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsInvestors(1));
  }, [dispatch]);
  const handlePagination = (current: any) => {
    dispatch(fetchUsInvestors(current.selected + 1));
  };
  return (
    <div>
      <main className={"main-section"}>
        <PageHero title={"US"} />
        {!usInvestors.error_us && (
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePagination}
            pageRangeDisplayed={2}
            pageCount={91}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        )}

        {usInvestors.error_us && <Error />}
        {usInvestors.loading_us ? (
          <Loading />
        ) : (
          <section>
            {usInvestors.data_us.map(
              (
                {
                  FundDescription,
                  companies,
                  urls,
                  LinkedInLink,
                  Location,
                  Portfoliocompanies,
                  firstname,
                  emails,
                }: any,
                idx: number,
              ) => {
                return (
                  <USInvestorCard
                    key={companies + idx}
                    description={FundDescription}
                    companyName={companies}
                    website={urls}
                    linkedIn={LinkedInLink}
                    location={Location}
                    portfolio={Portfoliocompanies}
                    firstname={firstname}
                    emails={emails}
                  />
                );
              },
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default US;
