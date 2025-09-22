import navImg from "../../assets/logo.png";
import curr from "../../assets/currencyIcon.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div>
      <div className="navbar max-w-[1296px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="Logo" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-1"></span>
          <span className="mr-1 font-bold">{availableBalance}</span>
          <img src={curr} alt="currency Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;