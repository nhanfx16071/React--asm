import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";
import Department from "./Department";
import Salary from "./Salary";
import { Route, Routes } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../shared/constants";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = (props) => {
  const [staffs, setStaffs] = useState(STAFFS);
  const [departments, setDepartments] = useState(DEPARTMENTS);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/nhanvien"
          element={
            <StaffList
              staffs={staffs}
              onStaffSelect={<StaffDetail staffs={staffs} />}
            />
          }
        />
        <Route
          exact
          path="/nhanvien/:id"
          element={<StaffDetail staffs={staffs} />}
        />

        <Route
          path="/phongban"
          element={<Department departments={departments} />}
        />
        <Route path="/luong" element={<Salary salarys={staffs} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
