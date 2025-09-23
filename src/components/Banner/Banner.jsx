import bgGrad from "../../assets/bg-shadow.png";
import bgImg from "../../assets/banner-main.png";
import { toast } from "react-toastify";

const Banner = ({ availableBalance, setAvailableBalance }) => {
  const handleClaimCredit = () => {
    setAvailableBalance(availableBalance + 10000);
    toast.success("Credit Added!");
  };

  return (
    <div
      className="relative h-[550px] max-w-[1296px] mx-auto rounded-3xl flex flex-col items-center justify-center text-center bg-cover bg-center my-5"
      style={{ backgroundImage: `url(${bgGrad})` }}
    >
      <div className="flex flex-col items-center justify-center">
        <img className="h-20 object-contain mb-4" src={bgImg} alt="BG" />
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h4 className="text-lg md:text-xl mb-6">
          Beyond Boundaries Beyond Limits
        </h4>
        <button
          onClick={handleClaimCredit}
          className="bg-[#E7FE29] px-5 py-3 rounded-2xl font-semibold mt-1 outline-2 outline-offset-4 outline-[#E7FE29] hover:bg-[#d4f51f] transition"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;