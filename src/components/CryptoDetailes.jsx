import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetCryptoDetailsQuery } from "../services/cryptoAPI";

const CryptoDetailes = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

  console.log(data);

  return <div>CryptoDetailes {coinId} </div>;
};

export default CryptoDetailes;
