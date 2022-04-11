import React, { ReactComponentElement, ReactElement, ReactNode } from "react";
import { Card } from "../types/card";
import { randomDate, randomId } from "../utils";
import { ReactComponent as CoinLogo } from "../assets/images/coinlogo.svg"

const sampleCard: Card = {
  id: 71,
  blockNumber: 12297450,
  transactionIndex: 6,
  sources: [0, 1, 2, 3],
  symbol: "eth",
  slug: "ethereum",
  leaseEnd: 12499050,
  subscriptionId: 7,
  networkId: 0,
  aggregationStrategy: 1,
  reportingStrategy: 0,
  status: 1,
  client: {
    clientType: 0,
    connectionInfo: {
      contractAddress: "0x0F9dfd6043965B02e74D01188c13936fBE71D688",
      networkId: 0,
    },
  },
  createdTimestamp: "2021-09-12T08:36:26.555",
  updatedTimestamp: "2021-09-12T08:39:16.526",
  display: true,
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
  const id = randomId(1000);
  const createdTimestamp = randomDate(new Date(2022, 1, 1), new Date());
  const updatedTimestamp = randomDate(createdTimestamp, new Date());

  return {
    ...sampleCard,
    id,
    createdTimestamp: createdTimestamp.toISOString(),
    updatedTimestamp: updatedTimestamp.toISOString(),
  };
});

export const getCards = (): Promise<Card[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(cards);
    }, 2500);
  });
};

export const getCoinPrice = (subscriptionId: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(3412025.12);
    }, 2000);
  });
};

export const getCoinLogo = (subscriptionId: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve('https://example.com/images/coinlogo.png')
    }, 2000);
  })
}
