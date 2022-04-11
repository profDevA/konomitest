import { useState, useEffect } from "react";
import { statuses } from "../../../constants";
import Status from "../card/Status";
import { ReactComponent as CoinLogo } from "../../../assets/images/coinlogo.svg";
import { getCoinLogo } from "../../../api";

export default function OracleCard() {

  return (
    <div className="w-[290px] min-h-min px-5 pr-[14px] bg-card hover:bg-card-active font-ubuntu">
      <div className="flex justify-between h-8 items-center text-xl font-bold">
        <span className="pt-1 ml-5">BLA</span>
        <span className="flex items-center capitalize">
          <Status color={statuses[1].color} />
          {statuses[1].label}
        </span>
      </div>
      <div className="flex justify-between items-stretch min-h-[105px] pt-5 pb-4">
        <div className="flex items-center justify-center">
          <CoinLogo />
        </div>
        <div className="flex flex-col justify-evenly items-end">
          <p className="text-[21px] leading-6">$3,412,025.12</p>
          <p className="text-[13px] leading-6">End: 08/Sept/2022 16:00</p>
        </div>
      </div>
    </div>
  );
}
