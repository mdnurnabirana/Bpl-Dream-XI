import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Suspense, useState } from "react";

// Player Api Fetching
const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
};
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000);
  const [myPlayers, setMyPlayers] = useState([]);

  const removePlayer = (param) => {
    const filteredData = myPlayers.filter(ply => ply.id !== param.id);
    setMyPlayers (filteredData);
    setAvailableBalance(availableBalance + param.price);
  }

  return (
    <>
      {/* Navbar  */}
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1296px] mx-auto flex justify-between items-center my-5">
        <h1 className="font-bold text-2xl">{
          toggle ? "Available Players" : `Selected Players (${myPlayers.length}/6)`
        }</h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(!toggle)}
            className={`btn rounded-l-2xl py-2 px-5 border-r-0 ${
              toggle ? "bg-[#E7FE29]" : " "
            } `}
          >
            Available Players
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className={`btn rounded-r-2xl py-2 px-5 border-r-0 ${
              !toggle ? "bg-[#E7FE29]" : " "
            } `}
          >
            Selected Players <span>({myPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense
          fallback={
            <div className="flex justify-center">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayers
            myPlayers={myPlayers}
            setMyPlayers={setMyPlayers}
            playerPromise={playerPromise}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers removePlayer = {removePlayer} myPlayers={myPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;