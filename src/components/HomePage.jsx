import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(data);

  if (isFetching) return "Loading...";

  return (
    <>
      <Typography.Title level={2} className="heading">
        Crypto Stats
      </Typography.Title>

      <Row>
        <Col span={12}>
          {" "}
          <Statistic title="Total Cryptocurrencies" value={1} />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Exchanges" value={1} />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Market Cap" value={1} />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total 24h Volume" value={1} />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Markets" value={1} />{" "}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
