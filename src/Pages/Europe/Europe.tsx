import { useEffect } from "react";
import PageHero from "../../Components/PageHero/PageHero";
import EuroInvestorCard from "../../Components/InvestorCard/Euro/EuroInvestorCard";
import { useAppDispatch, useAppSelector } from "../../Store";
import { fetchEuroInvestors } from "../../Store/Slices/EuroInvestors";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import ReactPaginate from "react-paginate";
const Europe = () => {
  const euroInvestors = useAppSelector((state) => state.euro);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEuroInvestors(1));
  }, [dispatch]);

  const handlePagination = (current: any) => {
    dispatch(fetchEuroInvestors(current.selected + 1));
  };
  return (
    <>
      <main className={"main-section"}>
        <PageHero title={"Europe"} />
        {!euroInvestors.error_euro && (
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
        <section className={"investor-card-wrapper"}>
          {euroInvestors.error_euro && <Error />}
          {euroInvestors.loading_euro ? (
            <Loading />
          ) : (
            <ul>
              {euroInvestors.data_euro.map((fund: any, idx) => {
                return <EuroInvestorCard key={fund.Investor + idx} {...fund} />;
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default Europe;
