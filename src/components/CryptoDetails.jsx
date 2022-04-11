import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Typography, Select } from "antd";

import { useGetCryptoDetailsQuery } from "../services/cryptoAPI";

const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

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
    </Col>
  );
};

export default CryptoDetails;
