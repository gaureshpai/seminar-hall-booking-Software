"use client";
import React, { useState } from "react";


function Page() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="flex items-center font-poppins justify-center min-h-screen  sm:px-6 lg:px-8">
      <div className="flex flex-row md:flex-row items-stretch justify-center rounded-lg shadow-gray-500  w-full max-w-4xl">
        <div className="hidden md:flex font-geistSans  flex-col w-96 justify-center rounded-l-lg items-center bg-[url('/images/template-1.jpg')] text-white p-6  shadow-lg ">
          <h2 className="text-2xl font-semibold mb-4">
            {isLogin ? "Welcome Back!" : "Join Us!"}
          </h2>
          <p className="text-sm font-geistMono text-center mb-6">
            {isLogin ? (
              "Sign in to access your account."
            ) : (
              <>Register to get started!</>
            )}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="bg-inherit text-white px-4 py-2 border rounded-full font-medium hover:bg-white hover:border-blue-600 hover:text-blue-600 transition"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
        <div className=" flex items-center justify-center   font-poppins">
          <div className="bg-white p-8  w-96 shadow-lg rounded-r-lg shadow-gray-300 flex flex-col">
            <h2 className="text-2xl font-bold text-center mb-4">
              {isLogin ? "Login" : "Register"}
            </h2>
            <form
              onSubmit={() => (window.location.href = "/")}
              className="space-y-4"
            >
              <div className="space-y-3">
                {!isLogin && (
                  <div className="flex items-center border border-gray-200 hover:border-blue-500 py-2 px-3">
                    <i className="fa-solid fa-user text-gray-500 mr-2"></i>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                      className="w-full outline-none"
                    />
                  </div>
                )}
                <div className="flex items-center border border-gray-200 rounded-md hover:border-blue-500 py-2 px-3">
                  <i className="fa-solid fa-envelope text-gray-500 mr-2"></i>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border border-gray-200 rounded-md hover:border-blue-500 py-2 px-3">
                  <i className="fa-solid fa-key text-gray-500 mr-2"></i>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="w-full outline-none"
                  />
                </div>
                {!isLogin && (
                  <div className="flex items-center border border-gray-200 rounded-md hover:border-blue-500 py-2 px-3">
                    <i className="fa-solid fa-key text-gray-500 mr-2"></i>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      required
                      className="w-full outline-none"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[url('/images/template-1.jpg')] text-white py-2 rounded-lg border hover:border-blue-600 hover:backdrop-blur-md transition"
              >
                {isLogin ? "Login" : "Register"}
              </button>

              <p className="text-center text-sm text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 hover:underline ml-1"
                >
                  {isLogin ? "Register here" : "Login here"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
