import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-6 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Patronage Platform. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
