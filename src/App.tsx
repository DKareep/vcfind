import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./Pages/Landing/Landing";
import Dashboard from "./Pages/Dashboard/Dashboard";
import US from "./Pages/US/US";
import Europe from "./Pages/Europe/Europe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/dashboard"} element={<Dashboard />}>
            <Route path={"/dashboard"} element={<US />} />
            <Route path={"/dashboard/europe"} element={<Europe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
