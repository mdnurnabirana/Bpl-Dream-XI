import bgGrad from "../../assets/bg-shadow.png";

const Newsletter = () => {
  return (
    <div className="z-50 text-center h-[300px] max-w-[1296px] mx-auto flex flex-col justify-center items-center mt-10 rounded-3xl outline-2 outline-offset-15 outline-[#FFFFFF]" style={{ backgroundImage: `url(${bgGrad})` }}>
      <h1 className="mt-2 text-2xl font-semibold">
        Subscribe to our Newsletter
      </h1>
      <p className="mt-2 mb-5">
        Get the latest updates and news right in your inbox!
      </p>
      <div className="flex gap-x-5 justify-center">
        <input
          className="py-2 px-5 outline-0 border rounded-md text-black bg-white"
          type="email"
          placeholder="Enter your Email"
        />
        <button
          className="py-2 px-5 rounded-md text-white font-semibold 
          bg-gradient-to-r from-[#131313] to-[#303030]
          shadow-[4px_4px_20px_0px_#13131330]"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;