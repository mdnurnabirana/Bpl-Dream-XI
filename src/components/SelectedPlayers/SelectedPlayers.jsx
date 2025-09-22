import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ myPlayers, removePlayer }) => {
  return (
    <div className="max-w-[1296px] mx-auto">
      {myPlayers.map((player) => (
        <SelectedCard player={player} removePlayer ={removePlayer} />
      ))}
    </div>
  );
};

export default SelectedPlayers;