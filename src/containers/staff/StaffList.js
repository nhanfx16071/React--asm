/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Button, Modal, Col, Input, ModalHeader, ModalBody, Row, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { DEPARTMENTS } from "../../shared/constants";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const minNum = (val) => !required(val) || !isNumber(val) || val >= 1;
const maxNum = (val) => val <= 3 || !isNumber(val);
const soDuong = (val) => !isNumber(val) || val >= 0;

const StaffList = (props) => {
  const [state, setState] = useState({
    nameF: "",
    modalOpen: false,
  });

  const handleBlur = (field) => {
    setState({
      ...state,
      touched: { ...state.touched, [field]: true },
    });
  };

  const handleSubmit = (value) => {
    const department = DEPARTMENTS.find((x) => x.id === value.department);
    const newStaff = {
      name: value.name,
      doB: value.doB,
      startDate: value.startDate,
      department: department,
      salaryScale: value.salaryScale,
      annualLeave: value.annualLeave,
      overTime: value.overTime,
      image: "/assets/images/alberto.png",
    };

    props.onAdd(newStaff);

    setState({
      ...state,
      modalOpen: !state.modalOpen,
    });
  };

  const toggleModal = () => {
    setState({
      ...state,
      modalOpen: !state.modalOpen,
    });
  };

  const timNhanVien = (event) => {
    const target = event.target;
    event.preventDefault();
    const nameS = target.nameS.value;
    setState({ ...state, nameF: nameS });
  };

  const listNhanvien = props.staffs
    .filter((val) => {
      if (state.nameF === "") return val;
      else if (val.name.toLowerCase().includes(state.nameF.toLowerCase())) return val;
      return 0;
    })
    .map((val) => {
      return (
        <div key={val.id} className="col-lg-2 col-md-4 col-sm-12" style={{ justifyContent: "center" }}>
          <Link to={"/nhanvien/" + val.id}>
            <div onClick={() => props.onStaffSelect(val.id)}></div>
            <img src={val.image} alt={val.name} />
            <p>{val.name}</p>
          </Link>
        </div>
      );
    });
  return (
    <div className="container mb-1">
      <div className="row">
        <div className="col-12 col-md-6 mt-3">
          <div className="row">
            <div className="col-2 col-md-10">
              <h3>Nh??n vi??n</h3>
            </div>
            <div className="col-2 col-auto">
              <Button outline onClick={toggleModal}>
                <span className="fa fa-plus fa-lg"></span>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <form onSubmit={timNhanVien} className="form-group row">
            <div className="col-8 col-md-8">
              <Input type="text" className="form-control" name="nameS" placeholder="T??m ki???m nh??n vi??n..." />
            </div>
            <div className="col-4 col-md-4">
              <button className="btn btn-success" type="submit">
                T??m ki???m
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="row">{listNhanvien}</div>
      <Modal isOpen={state.modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Th??m nh??n vi??n</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={handleSubmit}>
            <Row className="control-group mb-4">
              <Label htmlFor="name" md={4}>
                T??n
              </Label>
              <Col md={8}>
                <Control.text
                  model=".name"
                  className="form-control"
                  id="name"
                  name="name"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  model=".name"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Y??u c???u",
                    minLength: "Nh???p t??? 3 k?? t??? tr??? l??n",
                    maxLength: "Nh???p ??t h??n 15 k?? t???",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group  mb-4">
              <Label htmlFor="doB" md={4}>
                Ng??y sinh
              </Label>
              <Col md={8}>
                <Control.text
                  type="date"
                  model=".doB"
                  className="form-control"
                  id="doB"
                  name="doB"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  model=".doB"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Y??u c???u",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group  mb-4">
              <Label htmlFor="startDate" md={4}>
                Ng??y v??o c??ng ty
              </Label>
              <Col md={8}>
                <Control.text
                  type="date"
                  model=".startDate"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  model=".startDate"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Y??u c???u",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group  mb-4">
              <Label htmlFor="department" md={4}>
                Ph??ng ban
              </Label>
              <Col md={8}>
                <Control.select model=".department" id="department" name="department" defaultValue="Sale" className="form-control">
                  <option value="Dept01">Sale</option>
                  <option value="Dept02">HR</option>
                  <option value="Dept03">Marketing</option>
                  <option value="Dept04">IT</option>
                  <option value="Dept05">Finance</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="control-group  mb-4">
              <Label htmlFor="salaryScale" md={4}>
                H??? s??? l????ng
              </Label>
              <Col md={8}>
                <Control.text
                  model=".salaryScale"
                  className="form-control"
                  id="salaryScale"
                  name="salaryScale"
                  validators={{
                    required,
                    isNumber,
                    minNum,
                    maxNum,
                  }}
                />
                <Errors
                  model=".salaryScale"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Y??u c???u",
                    isNumber: "Ph???i nh???p s???",
                    minNum: "S??? ph???i >=1",
                    maxNum: "S??? ph???i <=3",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group">
              <Label htmlFor="annualLeave" md={4}>
                S??? ng??y ngh??? c??n l???i
              </Label>
              <Col md={8}>
                <Control.text
                  model=".annualLeave"
                  id="annualLeave"
                  name="annualLeave"
                  defaultValue="0"
                  className="form-control"
                  validators={{
                    required,
                    isNumber,
                    soDuong,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".annualLeave"
                  show="touched"
                  messages={{
                    required: "Ch??a nh???p ",
                    isNumber: "Ph???i l?? s???",
                    soDuong: "Ph???i >=0",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group  mb-3">
              <Label htmlFor="overTime" md={4}>
                S??? ng??y ???? l??m th??m
              </Label>
              <Col md={8}>
                <Control.text
                  model=".overTime"
                  id="overTime"
                  name="overTime"
                  defaultValue="0"
                  className="form-control"
                  validators={{
                    required,
                    isNumber,
                    soDuong,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".overTime"
                  show="touched"
                  messages={{
                    required: "Ch??a nh???p ",
                    isNumber: "Ph???i l?? s???",
                    soDuong: "Ph???i >=0",
                  }}
                />
              </Col>
            </Row>
            <div className="form-group row">
              <div className="col-12  text-center">
                <Button type="submit" color="primary">
                  Th??m nh??n vi??n
                </Button>
              </div>
            </div>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default StaffList;
