import { useState, useEffect } from "react";
import OracleCard from "../../components/oracle/card";
import SkeletonCard from "../../components/oracle/SkeletonCard";
import { ReactComponent as OracleHeader } from "../../assets/images/oracleheader.svg";
import { getCards } from "../../api";
import { Card } from "../../types/card";

export default function Oracle() {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    setLoading(true);
    getCards().then((cards) => {
      setCards(cards);
      setLoading(false);
    });
  }, []);

  return (
    <div className="py-24 flex justify-center bg-main-bg">
      <div className="container text-white px-4 text-center">
        <div className="text-cetner">
          <OracleHeader className="m-auto sm:ml-0" />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-x-12 gap-y-10 justify-items-center sm:justify-items-start">
          {loading
            ? [0, 1, 2, 3, 4, 5, 6, 7].map((item: number, key: number) => (
                <SkeletonCard key={item} />
              ))
            : cards.map((card) => (
                <OracleCard
                  key={card.id}
                  card={card}
                  selected={selectedCard === card.id}
                  setSelectedCard={setSelectedCard}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
