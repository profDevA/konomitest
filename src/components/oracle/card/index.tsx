import { useState, useEffect } from "react";
import { statuses } from "../../../constants";
import Status from "../card/Status";
import { ReactComponent as CoinLogo } from "../../../assets/images/coinlogo.svg";
import { getCoinLogo, getCoinPrice } from "../../../api";
import { Card } from "../../../types/card";
import { dollarUS, getExpiryDate } from "../../../utils";
interface CardProps {
  card: Card;
  selected: boolean;
  setSelectedCard: (id: number) => void;
}

export const OracleCard: React.FC<CardProps> = ({
  card,
  selected,
  setSelectedCard,
}) => {
  const { id } = card;
  const [coinPrice, setCoinPrice] = useState(0);
  const [coinLogo, setCoinLogo] = useState("");

  useEffect(() => {
    getCoinPrice(id).then((price) => setCoinPrice(price));
    getCoinLogo(id).then((logo) => setCoinLogo(logo));
  }, []);

  return (
    <div
      className={
        selected
          ? "w-[290px] min-h-min px-5 pr-[14px] bg-card-active font-ubuntu"
          : "w-[290px] min-h-min px-5 pr-[14px] bg-card hover:bg-card-active font-ubuntu"
      }
      onClick={() => setSelectedCard(card.id)}
    >
      <div className="flex justify-between h-8 items-center text-xl font-bold">
        <span className="pt-1 ml-5 uppercase">{card.symbol}</span>
        <span className="flex items-center capitalize">
          <Status color={statuses[card.status].color} />
          {statuses[card.status].label}
        </span>
      </div>
      <div className="flex justify-between items-stretch min-h-[105px] pt-5 pb-4">
        <div
          className={
            coinLogo
              ? "flex items-center justify-center"
              : "flex items-center justify-center w-[70px] h-[70px] rounded-full bg-slate-400 animate-pulse"
          }
        >
          {coinLogo ? <CoinLogo /> : ""}
        </div>
        <div className="flex flex-col justify-evenly items-end">
          <p
            className={
              coinPrice
                ? "text-[21px] leading-6"
                : "leading-6 bg-gray-400 w-36 rounded animate-pulse"
            }
          >
            {coinPrice ? dollarUS.format(coinPrice) : "\u00A0"}
          </p>
          <p className="text-[13px] leading-6">
            {`End ${getExpiryDate(
              card.createdTimestamp,
              card.leaseEnd,
              card.blockNumber
            )}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OracleCard;
