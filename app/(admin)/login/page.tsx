"use client";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Page() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="flex items-center text-2xl font-poppins justify-center  min-h-[100vh] bg-[url('/images/loginPic4.avif')]  bg-cover">
      <div className="flex flex-row md:flex-row items-stretch justify-center rounded-lg shadow-gray-500 ">
        <div className="hidden md:flex pl-8 font-geistSans  flex-col w-[250px] justify-between rounded-l-lg items-start bg-[url('/images/template-1.jpg')]  text-white p-10 bg-cover shadow-lg ">
          <div className="flex justify-center items-end mb-20 h-full">
            <div className="flex flex-col gap-5">
              <h2 className="text-5xl font-semibold ">
                {isLogin ? "Welcome Back!" : "Join Us!"}
              </h2>

              <p className="text-2xl font-geistMono mb-6">
                {isLogin ? (
                  "Sign in to access your account."
                ) : (
                  <>Register to get started!</>
                )}
              </p>
            </div>
          </div>
          <div className="bg-white/30 text-gray-700 flex flex-col justify-between font-geistMono h-[150px] p-4  rounded-lg backdrop-blur-lg w-full">
          {isLogin?   <p className="text-lg ">"Reserve your space, elevate your events.""</p>
           : <p className="text-lg">"Seamless bookings, effortless events."</p>}
          
            <div className="flex flex-row justify-between text-center">
              <img className=" w-[30px]" src="/images/logo.png" alt="" />
              <p >~AJIET</p>
              
            </div>
            

          </div>
        </div>
        <div className=" flex items-center justify-center sm:h-[400px] h-full font-poppins">
          <div className="bg-white p-[40px]  w-[280px] h-full items-center justify-center shadow-lg  sm:rounded-r-lg flex flex-col">
            <h2 className="text-3xl font-bold text-center mb-8">
              {isLogin ? "Login" : "Register"}
            </h2>
            <form
              onSubmit={() => (window.location.href = "/")}
              className="space-y-4"
            >
              <div className="space-y-3">
                {!isLogin && (
                  <div className="flex items-center border border-gray-200 rounded-full bg-gray-200  duration-150 transition hover:border-blue-500 py-2 px-3">
                    <i className="fa-solid fa-user text-gray-600 text-xl p-4"></i>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                      className="w-full bg-inherit outline-none"
                    />
                  </div>
                )}
                <div className="flex items-center border border-gray-200 rounded-full duration-150 bg-gray-200 transition hover:border-blue-500 py-2 px-3">
                <i className="fa-solid fa-envelope text-gray-600 text-xl p-4"></i>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full bg-inherit text-gray-700 outline-none"
                  />
                </div>
                <div className="flex items-center border border-gray-200 rounded-full duration-150 bg-gray-200 transition hover:border-blue-500 py-2 px-3">
                  <i className="fa-solid fa-key text-gray-500 text-xl p-4"></i>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="w-full bg-inherit outline-none"
                  />
                </div>
                {!isLogin && (
                  <div className="flex items-center border border-gray-200 rounded-full bg-gray-200 hover:border-blue-500 py-2 duration-150 transition px-3">
                    <i className="fa-solid fa-key text-gray-500 text-xl p-4"></i>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      required
                      className="w-full bg-inherit outline-none"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-[40px] bg-[url('/images/template-1.jpg')] bg-cover text-white py-2 rounded-full border hover:border-blue-600 hover:backdrop-blur-md transition duration-200"
              >
                {isLogin ? "Login" : "Register"}
              </button>

              <p className="text-center text-xl text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 hover:underline ml-1 duration-150 transition"
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
