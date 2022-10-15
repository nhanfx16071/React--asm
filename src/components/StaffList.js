import React from "react";
import { Link } from "react-router-dom";

const StaffList = (props) => {
  const listNhanvien = props.staffs.map((nv) => {
    return (
      <div
        key={nv.id}
        className="col-lg-2 col-md-4 col-sm-12"
        style={{ justifyContent: "center" }}
      >
        <Link to={"/nhanvien/" + nv.id}>
          <div onClick={() => props.onStaffSelect(nv.id)}></div>
          <img src={nv.image} alt={nv.name} />
          <p>{nv.name}</p>
        </Link>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{listNhanvien}</div>
    </div>
  );
};

export default StaffList;
