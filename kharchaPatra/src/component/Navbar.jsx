import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, User2, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#008080] text-white w-full shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          KharchaPatra<span className="text-white">📝💰</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-400">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link to="/signup" className="flex items-center gap-2 text-white hover:text-gray-400">
            <UserPlus className="w-5 h-5" />
            <span>Sign up</span>
          </Link>
          <Link to="/login" className="flex items-center gap-2 text-white hover:text-gray-400">
            <User2 className="w-5 h-5" />
            <span>Log In</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-[#008080]">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-pink-400"
            onClick={() => setMenuOpen(false)}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/signup"
            className="flex items-center gap-2 hover:text-pink-400"
            onClick={() => setMenuOpen(false)}
          >
            <UserPlus className="w-5 h-5" />
            <span>Sign Up</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-2 hover:text-pink-400"
            onClick={() => setMenuOpen(false)}
          >
            <User2 className="w-5 h-5" />
            <span>Log In</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
