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
            <CardBody>
              <CardTitle>{`Họ và tên: ${selectedStaff.name}`}</CardTitle>
              <CardText>{`Ngày sinh: ${dateFormat(
                selectedStaff.doB,
                "dd/mm/yyyy"
              )}`}</CardText>
              <CardText>{`Ngày vào công ty: ${dateFormat(
                selectedStaff.startDate,
                "dd/mm/yyyy"
              )}`}</CardText>
              <CardText>{`Ngày vào công ty: ${dateFormat(
                selectedStaff.startDate,
                "dd/mm/yyyy"
              )}`}</CardText>
              <CardText>{`Phòng ban: ${selectedStaff.department.name}`}</CardText>
              <CardText>{`Số ngày nghỉ còn lại: ${selectedStaff.annualLeave}`}</CardText>
              <CardText>{`Số ngày đã làm thêm: ${selectedStaff.overTime}`}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="container">
      <div
        className="row m-3"
        style={{ padding: 10, display: "flex", justifyContent: "center" }}
      >
        <button
          style={{ marginRight: 10 }}
          onClick={() => columnSelect("col-md-2 mt-1")}
          className="btn btn-primary col-2"
        >
          6 cột
        </button>
        <button
          style={{ marginRight: 10 }}
          onClick={() => columnSelect("col-md-3 mt-1")}
          className="btn btn-secondary col-2"
        >
}
          export default StaffList;
