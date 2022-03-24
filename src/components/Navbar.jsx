import React from "react";
import { Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/"> CryptApp </Link>
        </Typography.Title>
      </div>
    </div>
  );
};
export default Navbar;
