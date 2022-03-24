import React from "react";
import { Typography, Avatar, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/"> CryptApp </Link>
        </Typography.Title>
      </div>

      <Menu theme="light">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/"> Home </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Navbar;
