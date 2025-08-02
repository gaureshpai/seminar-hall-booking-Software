import Link from 'next/link'
import React from 'react'

const BookingTable = () => {
    return (
        <div className="container font-poppins mx-auto max-w-5xl m-[50px] ">
            <div className="bg-[#04091e] text-white p-8  shadow-lg">
                <div className="flex flex-row py-10 justify-between items-center">
                    <div className="md:mb-0 md:w-1/4 text-center md:text-left">
                        <h2 className="text-3xl justify-items-center text-left font-bold p-2 uppercase">
                            Book
                            <br /> the <br />  Hall
                        </h2>
                    </div>

                    <div className="md:w-3/4">
                        <div className="flex flex-row justify-center ">
                            <div className="w-full md:w-1/3 px-2 mb-5  md:mb-0">
                                <div className="mb-4">
                                    <input
                                        type="date"
                                        className="w-full py-2 px-3 border border-[#2b3146] placeholder-gray-400 bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                        aria-label="Schedule Date"
                                    />
                                </div>
                                <div>
                                    <select
                                        className="w-full py-2 px-3 border placeholder-gray-400 border-[#2b3146] bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                        aria-label="Event"
                                    >
                                        <option value="">Event</option>
                                        <option value="1">Academic Events</option>
                                        <option value="2">Cultural Events</option>
                                        <option value="3">Tech Events</option>
                                        <option value="4">Administrative Events</option>
                                        <option value="5">Others</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 px-2  md:mb-0">
                                <div className="mb-4">
                                    <select
                                        className="w-full py-2 px-3 border placeholder-gray-400 border-[#2b3146] bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                        aria-label="Time"
                                    >
                                        <option value="">Time</option>
                                        <option value="1">Morning</option>
                                        <option value="2">Afternoon</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="w-full py-2 px-3 border  border-[#2b3146] bg-[#04091e] text-gray-400 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                                        placeholder="Faculty Incharge"
                                        aria-label="Faculty Incharge"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/3 px-2">
                                <select
                                    className="w-full py-2 px-3 border placeholder-gray-400 border-[#2b3146] bg-[#04091e] text-gray-400 focus:outline-none focus:border-yellow-500"
                                    aria-label="Department"
                                >
                                    <option value="">Department</option>
                                    <option value="1">CSE</option>
                                    <option value="2">ISE</option>
                                    <option value="3">AIML</option>
                                    <option value="4">ICB</option>
                                    <option value="5">AIDS</option>
                                    <option value="6">ECE</option>
                                    <option value="7">CIVIL</option>
                                    <option value="8">MECH</option>
                                </select>
                                <Link
                                    href="/booking"
                                    className="mt-4 inline-block w-full  min-w-[60px] bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-600 transition duration-300 text-center"
                                    aria-label="Book Now"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-[30px]'>
                <p className="text-gray-800 text-3xl font-poppins py-5">&quot;Effortless Space Reservations for Every Occasion&quot;</p>
                <p className="text-gray-500 text-xl font-poppins py-3 px-6">We make booking seminar halls easy and hassle-free. Whether it&apos;s for events, meetings, or gatherings, our platform ensures a smooth experience for students and faculty alike.</p>
            </div>
        </div>
    )
}

export default BookingTable