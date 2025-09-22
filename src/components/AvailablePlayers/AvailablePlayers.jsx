import { use } from "react";
import PlayerCard from "../PlayerCards/PlayerCard";

const AvailablePlayers = ({ playerPromise, setAvailableBalance, availableBalance }) => {
  const playerData = use(playerPromise);
  return (
    <div className="max-w-[1296px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {
        playerData.map((player) => <PlayerCard setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} player= {player}></PlayerCard>)
      }
    </div>
  );
};

export default AvailablePlayers;
