import { use } from "react";
import userIcon from "../../assets/icon-1.png";
import flagIcon from "../../assets/flag-icon.png";

const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  return (
    <div className="max-w-[1296px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => (
        <div className="card bg-base-100 shadow-sm p-3">
          <figure>
            <img
              className="h-[240px] object-cover rounded-2xl"
              src={player["image"]}
              alt="Shoes"
            />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img src={userIcon} alt="User Icon" />
              <h2 className="card-title ml-2">{player.name}</h2>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2 mt-3">
              <div className="flex items-center">
                <img className="w-5 h-5" src={flagIcon} alt="FlagIcon" />
                <span className="ml-2">{player.country}</span>
              </div>
              <div>
                <button className="btn">All Rounder</button>
              </div>
            </div>
            <div className="flex justify-between font-bold mt-3">
              <span>Rating</span>
              <span>5</span>
            </div>
            <div className="flex justify-between font-bold mt-3">
              <span>Left Handed Batsman</span>
              <span>Right Handed Bowler</span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="font-bold">
                Price: $<span>100000</span>
              </p>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
