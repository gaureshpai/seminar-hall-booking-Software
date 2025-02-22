"use client"
import React, { useState } from 'react';

function page() {
    const [isLogin, setIsLogin] = useState(true);


    return (
        <div className="flex items-center justify-center font-poppins min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">
                    {isLogin ? "Login" : "Register"}
                </h2>
                <form onSubmit={() => window.location.href = "/"} className="space-y-4">
                    <div className="space-y-3">
                        {!isLogin && (
                            <div className="flex items-center border-b-2 border-gray-300 py-2">
                                <i className="fa-solid fa-user text-gray-500 mr-2"></i>
                                <input type="text" id="name" placeholder="Name" required
                                    className="w-full outline-none px-2 py-1"/>
                            </div>
                        )}
                        <div className="flex items-center border-b-2 border-gray-300 py-2">
                            <i className="fa-solid fa-envelope text-gray-500 mr-2"></i>
                            <input type="email" id="email" placeholder="Email" required
                                className="w-full outline-none px-2 py-1"/>
                        </div>
                        <div className="flex items-center border-b-2 border-gray-300 py-2">
                            <i className="fa-solid fa-key text-gray-500 mr-2"></i>
                            <input type="password" id="password" placeholder="Password" required
                                className="w-full outline-none px-2 py-1"/>
                        </div>
                        {!isLogin && (
                            <div className="flex items-center border-b-2 border-gray-300 py-2">
                                <i className="fa-solid fa-key text-gray-500 mr-2"></i>
                                <input type="password" id="confirmPassword" placeholder="Confirm Password" required
                                    className="w-full outline-none px-2 py-1"/>
                            </div>
                        )}
                    </div>

                    <p id="Password-incorrect" className="text-red-500 text-sm text-center"></p>

                    <button type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        {isLogin ? "Login" : "Register"}
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"} 
                        <button type="button" onClick={() => setIsLogin(!isLogin)} 
                            className="text-blue-500 hover:underline ml-1">
                            {isLogin ? "Register here" : "Login here"}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default page;
