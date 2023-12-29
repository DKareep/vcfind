import "./Styles/Sidebar.scss";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className={"side-bar"}>
      <ul className={"sidebar-list-container"}>
        <Link to={"/dashboard"}>
          <li>US Investors</li>
        </Link>
        <Link to={"/dashboard/europe"}>
          <li>European Investors</li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
