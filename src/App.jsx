import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

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
    setMyPlayers(filteredData);
    setAvailableBalance(availableBalance + param.price);
  }

  return (
    <>
      {/* Navbar  */}
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></Banner>
      <div className="max-w-[1296px] mx-auto flex flex-col md:flex-row justify-between items-center my-5 px-4">
        <h1 className="font-bold text-2xl mb-4 md:mb-0">
          {toggle ? "Available Players" : `Selected Players (${myPlayers.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(!toggle)}
            className={`btn rounded-l-2xl py-2 px-5 border-r-0 ${
              toggle ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available Players
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className={`btn rounded-r-2xl py-2 px-5 border-r-0 ${
              !toggle ? "bg-[#E7FE29]" : ""
            }`}
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
        <SelectedPlayers removePlayer={removePlayer} myPlayers={myPlayers} toggle={toggle} setToggle={setToggle}></SelectedPlayers>
      )}

      <Newsletter></Newsletter>
      <Footer></Footer>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;