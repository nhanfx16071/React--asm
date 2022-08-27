import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <React.Fragment>
      <Navbar expand="md" className="bg-info" dark>
        <div className="container-fluid header">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand>
            <img src="/assets/images/logo.png" alt="logo" width="50" />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/nhanvien">
                  <span className="fa fa-users"></span>Nhân viên
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/phongban">
                  <span className="fa fa-address-card"></span>Phòng ban
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/luong">
                  <hspan className="fa fa-money"></hspan>Bảng lương
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
