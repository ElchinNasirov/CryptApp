import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";

// Converts long numbers into pretty, human-readable strings: 2000 => '2k'
import millify from "millify";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

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
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />{" "}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
