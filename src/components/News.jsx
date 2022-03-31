import React from "react";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
  const { data } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });

  return <div></div>;
};

export default News;
