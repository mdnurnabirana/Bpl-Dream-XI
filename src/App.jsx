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

function App() {
  const [toggle, setToggle] = useState(true);
  const playerPromise = fetchPlayers();

  return (
    <>
      {/* Navbar  */}
      <Navbar></Navbar>
      <div className="max-w-[1296px] mx-auto flex justify-between items-center my-5">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(!toggle)}
            className="btn rounded-l-2xl py-2 px-5 border-r-0 bg-[#E7FE29]"
          >
            Available Players
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="btn rounded-r-2xl py-2 px-5 border-l-0"
          >
            Selected Players <span>(0)</span>
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
          <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;