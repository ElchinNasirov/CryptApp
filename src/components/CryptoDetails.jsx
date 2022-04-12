import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Typography, Select } from "antd";
import millify from "millify";
import { DollarCircleOutlined, TrophyOutlined, NumberOutlined, ThunderboltOutlined } from "@ant-design/icons";

import { useGetCryptoDetailsQuery } from "../services/cryptoAPI";

const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    { title: "Price to USD", value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: "24h Volume", value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: "Market Cap", value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: "All-time-high(daily avg.)", value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Typography.Title level={2} className="coin-name">
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </Typography.Title>
        <p>{cryptoDetails.name} live price in US dollars. View value statistics, market cap and supply.</p>
      </Col>
      <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Time Period" onChange={(value) => setTimePeriod(value)}>
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Typography.Title level={3} className="coin-details-heading">
              {cryptoDetails.name} Value Statistics
            </Typography.Title>
            <p>An Overview showing the stats of Bitcoin</p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Typography.Text>{icon}</Typography.Text>
                <Typography.Text>{title}</Typography.Text>
              </Col>
              <Typography.Text className="stats">{value}</Typography.Text>
            </Col>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
