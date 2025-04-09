import React from 'react';
import { HandHelping, Search, Filter } from 'lucide-react';

const RequestsPage: React.FC = () => {
  // Placeholder data - replace with actual data fetching
  const requests = [
    { id: 1, title: "Need help with transport for medical appointment", location: "Kyiv", type: "Transport", status: "Open" },
    { id: 2, title: "Seeking legal advice regarding veteran benefits", location: "Lviv", type: "Legal", status: "Open" },
    { id: 3, title: "Requesting assistance with home repairs", location: "Odesa", type: "Physical", status: "In Progress" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <HandHelping className="w-8 h-8 mr-2 text-blue-600" /> Assistance Requests
      </h1>

      {/* Search and Filter Bar */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow flex flex-wrap items-center gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search requests..."
            className="border rounded-md py-2 px-4 w-full pr-10"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <div className="flex items-center gap-2">
           <Filter className="w-5 h-5 text-gray-500" />
           <select className="border rounded-md py-2 px-3">
             <option>All Types</option>
             <option>Transport</option>
             <option>Legal</option>
             <option>Medical</option>
             <option>Physical</option>
           </select>
           <select className="border rounded-md py-2 px-3">
             <option>All Locations</option>
             <option>Kyiv</option>
             <option>Lviv</option>
             <option>Odesa</option>
           </select>
           <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Apply Filters</button>
        </div>
         <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 ml-auto">
           Create New Request
         </button>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((req) => (
          <div key={req.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800">{req.title}</h2>
            <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
              <span>Location: {req.location}</span>
              <span>Type: {req.type}</span>
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${req.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {req.status}
              </span>
            </div>
            <div className="mt-3">
              <a href="#" className="text-blue-600 hover:underline text-sm">View Details</a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination (Placeholder) */}
      <div className="mt-8 text-center">
        <span className="text-gray-600">Pagination controls will go here</span>
      </div>
    </div>
  );
};

export default RequestsPage;
