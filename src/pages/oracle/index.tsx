import { useEffect } from 'react'
import OracleCard from "../../components/oracle/card";
import SkeletonCard from "../../components/oracle/SkeletonCard";
import { ReactComponent as OracleHeader } from "../../assets/images/oracleheader.svg";
import { getCards } from "../../api";

export default function Oracle() {
  useEffect(() => {
    getCards().then(data => console.log(data));
  }, []);

  return (
    <div className="py-24 flex justify-center bg-main-bg">
      <div className="container text-white px-4 text-center">
        <div className="text-cetner">
          <OracleHeader className="m-auto sm:ml-0" />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-x-12 gap-y-10 justify-items-center sm:justify-items-start">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item: number, key: number) => (
            <OracleCard key={key} />
            // <SkeletonCard />
          ))}
        </div>
      </div>
    </div>
  );
}
