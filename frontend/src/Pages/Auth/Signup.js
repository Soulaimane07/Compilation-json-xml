import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Components/Redux/Slices/UserSlice';
import { useDispatch } from 'react-redux';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SignupFun = (e) => {
    e.preventDefault();

    const userData = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(login(userData)); // Dispatch user data to Redux
    navigate('/'); // Redirect to the home page
    console.log('User signed up and logged in:', userData);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full p-2 m-4 rounded-md overflow-hidden AuthBg">
      </div>

      {/* Right Section */}
      <div className="w-1/2 m-4 px-20 py-8 flex flex-col justify-between">
        <img src="../logo.png" alt="Logo" className="w-40 mx-auto" />

        {/* Signup Form */}
        <div>
          <h2 className="text-center font-medium text-4xl">Create new account</h2>
          <p className="text-center mt-2 opacity-60">
            Enter your full name, email, and password to create a new account
          </p>

          <form onSubmit={SignupFun} className="max-w-sm mx-auto mt-10">
            {/* Full Name Input */}
            <div className="mb-5">
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-violet-700 w-full hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
          </form>
        </div>

        {/* Sign In Link */}
        <div className="flex items-center space-x-2 mx-auto justify-center">
          <p>Already have an account?</p>
          <Link
            to="/login"
            className="hover:text-violet-700 font-medium hover:underline transition-all"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
