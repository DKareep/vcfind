import "./Styles/PageHero.scss";
const PageHero = ({ title }: { title: string }) => {
  return (
    <div className={"page-hero"}>
      <h3 className={"page-heading"}>Investors from {title}</h3>
    </div>
  );
};

export default PageHero;
