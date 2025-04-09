import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const RegisterPage: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
        <UserPlus className="w-6 h-6 mr-2" /> Register
      </h2>
       {/* Add Diya integration button here when possible */}
       <div className="text-center my-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full mb-3">
          Register with Diya (Placeholder)
        </button>
      </div>
       <div className="text-center text-gray-500 my-4">OR fill the form below</div>
      <form>
        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Register as:</label>
          <div className="flex justify-around">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="role" value="protector" />
              <span className="ml-2">Protector</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="role" value="helper" defaultChecked />
              <span className="ml-2">Helper</span>
            </label>
          </div>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="name" type="text" placeholder="Full Name" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="Email" />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="password" type="password" placeholder="******************" />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="confirm-password" type="password" placeholder="******************" />
        </div>

        {/* Location Fields (Example) */}
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City / Village
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="city" type="text" placeholder="e.g., Kyiv" />
        </div>


        <div className="flex items-center justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Register
          </button>
        </div>
      </form>
      <p className="text-center text-gray-600 text-sm mt-6">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
