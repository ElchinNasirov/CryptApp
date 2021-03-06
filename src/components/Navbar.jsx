import React from "react";
import { Typography, Avatar, Menu } from "antd";
import { Link } from "react-router-dom";
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size="large">Crypto Logo</Avatar>
        <Typography.Title level={2} className="logo">
          <Link to="/"> CryptApp </Link>
        </Typography.Title>
      </div>

      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/"> Home </Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies"> Cryptocurrencies </Link>
        </Menu.Item>

        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges"> Exchanges </Link>
        </Menu.Item>

        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news"> News </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Navbar;
