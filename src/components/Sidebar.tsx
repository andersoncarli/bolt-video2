import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Upload, LogIn, UserPlus } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} />
          Home
        </Link>
        <Link to="/upload" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Upload className="inline-block mr-2" size={20} />
          Upload Video
        </Link>
        <Link to="/login" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <LogIn className="inline-block mr-2" size={20} />
          Login
        </Link>
        <Link to="/register" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <UserPlus className="inline-block mr-2" size={20} />
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;