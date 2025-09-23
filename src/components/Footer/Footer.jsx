import navImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-white bg-[#06091A] py-10 -mt-35 relative -z-1">
      {/* Logo */}
      <div className="text-center mt-30">
        <img className="mx-auto h-full" src={navImg} alt="LOGO" />
      </div>

      {/* Footer content */}
      <div className="max-w-[1296px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left px-5 mt-5">
        {/* About Us */}
        <div>
          <h1 className="font-bold mb-2">About Us</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h1 className="font-bold mb-2">Quick Links</h1>
          <ol className="text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ol>
        </div>

        {/* Newsletter */}
        <div>
          <h1 className="font-bold mb-2">Subscribe Newsletter</h1>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex">
            <input
              className="flex-1 p-2 rounded-l-md text-black outline-none bg-white"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-amber-400 text-black font-semibold px-4 rounded-r-md hover:bg-amber-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Dream 11 Cricket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;