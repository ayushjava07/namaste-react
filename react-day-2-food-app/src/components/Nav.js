import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";

const Nav = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
   <div className="w-full z-40 bg-[linear-gradient(60deg,#FBC02D,#FFA000,#F57C00,#E65100)] shadow-xl rounded-3xl px-8 py-4 flex items-center justify-between backdrop-blur-sm bg-opacity-90 border border-yellow-600">
      
      {/* Logo Section */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
        <img
          alt="App Logo"
          src={LOGO_URL}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nav Links and Button */}
      <div className="flex items-center space-x-8 text-white text-lg font-medium">
        <Link to="/" className="hover:text-yellow-900 transition">Home</Link>
        <Link to="/about" className="hover:text-yellow-900 transition">About</Link>
        <Link to="/contacts" className="hover:text-yellow-900  transition">Contact</Link>

        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="bg-white text-yellow-800 px-4 py-1 rounded-full font-semibold shadow hover:bg-yellow-500 transition hover:outline-1 hover:border-black"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Nav;
