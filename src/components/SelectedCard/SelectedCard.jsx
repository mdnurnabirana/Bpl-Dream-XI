import dltIcon from "../../assets/dlt-icon.png";

const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  }

  return (
    <div className="flex items-center justify-between bg-white border-2 border-gray-200 rounded-xl p-3 mt-4">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-xl object-cover"
          src={player.image}
          alt="Player"
        />
        <div className="ml-3">
          <h1 className="font-semibold">{player.name}</h1>
          <h2 className="text-sm text-gray-600">{player.country}</h2>
        </div>
      </div>

      <button>
        <img onClick={handleRemove} className="w-5 h-5" src={dltIcon} alt="Delete" />
      </button>
    </div>
  );
};

export default SelectedCard;