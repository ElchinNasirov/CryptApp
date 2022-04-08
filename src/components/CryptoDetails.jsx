import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetCryptoDetailsQuery } from "../services/cryptoAPI";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  // const {data: coinHistory} =

  console.log(data);

  return <div>CryptoDetailes {coinId} </div>;
};

export default CryptoDetails;
