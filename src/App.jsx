import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Suspense } from "react";

// Player Api Fetching
const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();
  return (
    <>
      {/* Navbar  */}
      <Navbar></Navbar>

      {/* Available Player Container Component */}
      <Suspense fallback={
        <span className="loading loading-dots loading-xl"></span>
      }>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>

      {/* Selected Players Container */}
      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
