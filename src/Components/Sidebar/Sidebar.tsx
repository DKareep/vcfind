import "./Styles/Sidebar.scss";
import { NavLink } from "react-router-dom";
import { RiMoneyEuroCircleFill, RiMoneyDollarCircleFill } from "react-icons/ri";
const Sidebar = () => {
  return (
    <aside className={"side-bar"}>
      <ul className={"sidebar-list-container"}>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? "link-active" : "")}
          end
        >
          <li>
            <RiMoneyDollarCircleFill size={22} className={"sidebar-icon"} />
            US Funds
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/europe"}
          className={({ isActive }) => (isActive ? "link-active" : "")}
        >
          <li>
            <RiMoneyEuroCircleFill size={22} className={"sidebar-icon"} />
            Euro Funds
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
