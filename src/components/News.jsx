import React from "react";
import { Row, Col, Card, Typography, Avatar, Text } from "antd";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";

const News = ({ simplified }) => {
  const { data } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });

  if (!data?.value) return "Loading...";
  console.log(data);

  return (
    <Row gutter={[24, 24]}>
      {data.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {news.name}
                </Typography.Title>
                <img src={news?.image?.thumbnail?.contentUrl} alt="news" />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div>
                <div className="provider-container">
                  <Avatar
                    src={news.provider[0]?.image?.thumbnail?.contentUrl}
                    alt=""
                  />
                  <Typography.Text className="provider-name">
                    {news.provider[0]?.name}
                  </Typography.Text>
                </div>

                <Typography.Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Typography.Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
