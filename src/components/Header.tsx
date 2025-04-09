import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, LogIn, UserPlus, MessageSquare, HandHelping, Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-semibold text-gray-700">
          <ShieldCheck className="w-6 h-6 mr-2 text-blue-600" />
          Patronage Platform
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600 flex items-center">
            <Home className="w-4 h-4 mr-1" /> Home
          </Link>
          <Link to="/requests" className="text-gray-600 hover:text-blue-600 flex items-center">
            <HandHelping className="w-4 h-4 mr-1" /> Requests
          </Link>
          <Link to="/forum" className="text-gray-600 hover:text-blue-600 flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" /> Forum
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-blue-600 flex items-center">
             <LogIn className="w-4 h-4 mr-1" /> Login
          </Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
            <UserPlus className="w-4 h-4 mr-1" /> Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
