import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HandHelping, Users, MessageSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Patronage Platform</h1>
      <p className="text-lg text-gray-600 mb-8">Connecting Protectors with Helpers.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Feature Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Support Protectors</h2>
          <p className="text-gray-600 mb-4">Find verified requests for assistance from military personnel.</p>
          <Link to="/requests" className="text-blue-600 hover:underline">View Requests</Link>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <HandHelping className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Become a Helper</h2>
          <p className="text-gray-600 mb-4">Register to offer your support, skills, or resources.</p>
          <Link to="/register" className="text-green-600 hover:underline">Register Now</Link>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Community Forum</h2>
          <p className="text-gray-600 mb-4">Engage with the community, share experiences, and find support.</p>
          <Link to="/forum" className="text-purple-600 hover:underline">Visit Forum</Link>
        </div>
      </div>

      {/* Placeholder for Urgent Assistance / Gallery */}
       <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
         <p className="font-bold">Urgent Assistance Needed</p>
         <p>Highlighting critical support requests here.</p>
       </div>

       <div className="bg-gray-100 p-6 rounded-lg">
         <h3 className="text-2xl font-semibold mb-4 text-gray-700">Positive Gallery</h3>
         <p className="text-gray-600">Showcasing successful support stories (coming soon).</p>
         {/* Image placeholders or carousel could go here */}
       </div>
    </div>
  );
};

export default HomePage;
