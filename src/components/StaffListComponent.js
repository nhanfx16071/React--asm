import React, { useState } from "react";
import { STAFFS } from "../shared/constants";
//Declaring StaffList
const StaffList = () => {
  const [staffs, setStaffs] = useState(STAFFS);
  const [selectedStaff, setSelectedStaff] = useState(null);
  //Declaring Staff
  const Staff = () => {
    if (selectedStaff !== null) {
      return (
        <div className="col-4">
          <Card>
            <CardImg
              width="100%"
              src={selectedStaff.image}
              alt={selectedStaff.name}
            />






            return (
            <div className="container">
            </div>)
}
            export default StaffList;
