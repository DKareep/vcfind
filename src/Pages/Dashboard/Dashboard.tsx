import "./Styles/Dashboard.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../Components/DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <>
      {" "}
      <DashboardHeader />
      <div className={"dashboard-wrapper"}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
