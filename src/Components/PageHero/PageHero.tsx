import "./Styles/PageHero.scss";
const PageHero = ({ title }: { title: string }) => {
  return (
    <div className={"page-hero"}>
      <h3 className={"page-heading"}>Investors from {title}</h3>
      <p className="page-subheading">
        Find details of VC funds, Investors and their contact below!
      </p>
    </div>
  );
};

export default PageHero;
