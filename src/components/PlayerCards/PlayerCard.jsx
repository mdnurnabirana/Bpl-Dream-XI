import userIcon from "../../assets/icon-1.png";
import flagIcon from "../../assets/flag-icon.png";
import { useState } from "react";

const PlayerCard = ({ player, setAvailableBalance, availableBalance, myPlayers, setMyPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    const price = parseInt(player.price, 10); // ensure it's a number
    const balance = parseInt(availableBalance, 10);

    if (price > balance) {
      alert("Not enough balance to select this player!");
      return;
    }

    setIsSelected(true);
    setAvailableBalance(balance - price);

    setMyPlayers([...myPlayers, player]);
  };

  return (
    <div className="card bg-base-100 shadow-sm p-3">
      <figure>
        <img
          className="w-full h-[240px] object-cover rounded-2xl"
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
            Price: $<span>{player.price}</span>
          </p>
          <button
            disabled={isSelected && true}
            onClick={handleChoosePlayer}
            className="btn"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
