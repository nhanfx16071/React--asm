import React, { useState } from "react";
import { STAFFS } from "../shared/constants";

//Declaring StaffList
const StaffList = () => {
  const [staffs, setStaffs] = useState(STAFFS);
  const [selectedStaff, setSelectedStaff] = useState(null);
  return (
    <div className="container">
    </div>)
}
export default StaffList;
