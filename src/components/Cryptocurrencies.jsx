import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(data?.data?.coins);

    const searchedCrypto = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(searchedCrypto);
  }, [data, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="search-crypto">
        <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />{" "}
      </div>

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
            <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
              <Card title={`${crypto.rank}. ${crypto.name}`} extra={<img className="crypto-image" src={crypto.iconUrl} alt="cryptocurrency" />} hoverable>
                <p>Price: {`${"$"}${millify(crypto.price)}`}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
