import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ myPlayers, removePlayer, toggle, setToggle }) => {
  return (
    <div className="max-w-[1296px] mx-auto">
      {myPlayers.map((player) => (
        <SelectedCard player={player} removePlayer ={removePlayer} />
      ))}
      <button onClick={() => setToggle(!toggle)} className="bg-[#E7FE29] py-2 px-5 rounded-2xl font-semibold mt-5">Add More Player</button>
    </div>
  );
};

export default SelectedPlayers;