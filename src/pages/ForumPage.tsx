import React from 'react';
import { MessageSquare, PlusCircle } from 'lucide-react';

const ForumPage: React.FC = () => {
  // Placeholder data
  const categories = [
    { id: 1, name: "General Discussion", description: "Talk about anything related to the community.", topics: 15, posts: 120 },
    { id: 2, name: "Support & Advice", description: "Share experiences and offer support.", topics: 8, posts: 65 },
    { id: 3, name: "Resource Sharing", description: "Post useful links, contacts, and resources.", topics: 5, posts: 30 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <MessageSquare className="w-8 h-8 mr-2 text-purple-600" /> Community Forum
        </h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center">
          <PlusCircle className="w-5 h-5 mr-1" /> New Topic
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="bg-gray-100 p-3 font-semibold text-gray-700 rounded-t-lg grid grid-cols-3">
          <div>Category</div>
          <div className="text-center">Topics</div>
          <div className="text-center">Posts</div>
        </div>
        {categories.map((cat) => (
          <div key={cat.id} className="p-4 border-b last:border-b-0 grid grid-cols-3 items-center hover:bg-gray-50">
            <div>
              <a href="#" className="text-lg font-semibold text-purple-700 hover:underline">{cat.name}</a>
              <p className="text-sm text-gray-500">{cat.description}</p>
            </div>
            <div className="text-center text-gray-600">{cat.topics}</div>
            <div className="text-center text-gray-600">{cat.posts}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
