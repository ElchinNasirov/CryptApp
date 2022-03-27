import { Typography, Row, Col, Statistic } from "antd";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console(data);

  if (isFetching) return "Loading...";

  return (
    <>
      <Typography.Title level={2} className="heading">
        Crypto Stats
      </Typography.Title>

      <Row>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.total}
          />{" "}
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
