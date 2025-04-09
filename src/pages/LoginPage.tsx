import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const LoginPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
        <LogIn className="w-6 h-6 mr-2" /> Login
      </h2>
      {/* Add Diya/BankID integration buttons here when possible */}
      <div className="text-center my-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full mb-3">
          Login with Diya (Placeholder)
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full">
          Login with BankID (Placeholder)
        </button>
      </div>
      <div className="text-center text-gray-500 my-4">OR</div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
      <p className="text-center text-gray-600 text-sm mt-6">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
